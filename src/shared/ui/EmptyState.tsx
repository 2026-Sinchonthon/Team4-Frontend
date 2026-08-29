import type { ReactNode } from 'react'
import './ui.css'

interface EmptyStateProps {
  title: string
  description?: string
  action?: ReactNode
  icon?: ReactNode
}

export function EmptyState({ title, description, action, icon = '○' }: EmptyStateProps) {
  return <section className="ui-empty-state"><span className="ui-empty-state__icon" aria-hidden="true">{icon}</span><h3>{title}</h3>{description && <p>{description}</p>}{action && <div className="ui-empty-state__action">{action}</div>}</section>
}
