import type { HTMLAttributes, ReactNode } from 'react'
import './ui.css'

type BadgeTone = 'primary' | 'success' | 'warning' | 'neutral'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  tone?: BadgeTone
}

export function Badge({ children, tone = 'primary', className = '', ...props }: BadgeProps) {
  return <span className={`ui-badge ui-badge--${tone} ${className}`.trim()} {...props}>{children}</span>
}
