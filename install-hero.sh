#!/bin/bash

# Ensure we're in the right directory
cd "$(dirname "$0")"

# Create a temporary directory for the installation
mkdir -p .temp-install

# Install the component in the temporary directory first
pnpm dlx shadcn@canary add https://nsui.irung.me/r/hero-section-1.json --cwd .temp-install

# Check if the installation was successful
if [ $? -eq 0 ]; then
    # Copy only the necessary files to our project
    cp -r .temp-install/components/* src/components/ 2>/dev/null || true
    
    # Clean up
    rm -rf .temp-install
    
    echo "Hero section installed successfully!"
else
    echo "Installation failed!"
    rm -rf .temp-install
    exit 1
fi 