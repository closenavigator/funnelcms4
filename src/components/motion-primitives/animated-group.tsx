'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  initialY?: number
}

const AnimatedGroup: React.FC<AnimatedGroupProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  initialY = 20,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedGroup 