import React from 'react'
import { motion, Variants } from 'framer-motion'

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
}

export const AnimatedGroup: React.FC<AnimatedGroupProps> = ({ children, className, variants }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        },
        ...variants,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 