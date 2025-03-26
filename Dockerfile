FROM node:20-slim AS base

# Install required dependencies for sharp and other build tools
RUN apt-get update && apt-get install -y \
    openssl \
    python3 \
    build-essential \
    # Required for sharp
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Files required by pnpm install
COPY package.json pnpm-lock.yaml* ./

# Enable native build for sharp
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1

RUN pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry during the build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1

# Build the application
RUN pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set proper permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Switch to non-root user
USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Copy payload files
COPY --from=builder /app/src/collections ./src/collections
COPY --from=builder /app/src/blocks ./src/blocks
COPY --from=builder /app/src/utilities ./src/utilities
COPY --from=builder /app/src/payload.config.ts ./src/payload.config.ts
COPY --from=builder /app/src/migrations ./src/migrations

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 