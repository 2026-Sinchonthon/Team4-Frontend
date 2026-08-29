import type { HTMLAttributes, ReactNode } from 'react'
import './ui.css'

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg'
  interactive?: boolean
}

export function Card({ children, padding = 'md', interactive = false, className = '', ...props }: CardProps) {
  return <article className={`ui-card ui-card--${padding}${interactive ? ' ui-card--interactive' : ''} ${className}`.trim()} {...props}>{children}</article>
}
