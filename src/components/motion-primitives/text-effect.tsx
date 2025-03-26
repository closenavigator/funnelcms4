import React from 'react'
import { motion } from 'framer-motion'

interface TextEffectProps {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements | React.ComponentType
  className?: string
  preset?: 'fade-in-blur'
  speedSegment?: number
  per?: 'line'
  delay?: number
}

export const TextEffect: React.FC<TextEffectProps> = ({
  children,
  as: Component = 'div',
  className,
  preset = 'fade-in-blur',
  speedSegment = 0.3,
  per = 'word',
  delay = 0,
}) => {
  const text = React.Children.toArray(children)[0]
  if (typeof text !== 'string') {
    return <Component className={className}>{children}</Component>
  }

  const words = text.split(per === 'line' ? '\n' : ' ')

  return (
    <Component className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{
            display: 'inline-block',
            marginRight: per === 'line' ? 0 : '0.25em',
            marginBottom: per === 'line' ? '0.5em' : 0,
          }}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * speedSegment,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  )
} 