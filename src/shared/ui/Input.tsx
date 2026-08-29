import type { InputHTMLAttributes } from 'react'
import './ui.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export function Input({ id, label, error, hint, className = '', ...props }: InputProps) {
  const inputId = id ?? props.name
  return (
    <label className="ui-field" htmlFor={inputId}>
      {label && <span className="ui-field__label">{label}</span>}
      <input id={inputId} className={`ui-input${error ? ' ui-input--error' : ''} ${className}`.trim()} aria-invalid={Boolean(error)} {...props} />
      {(error || hint) && <span className={`ui-field__message${error ? ' ui-field__message--error' : ''}`}>{error ?? hint}</span>}
    </label>
  )
}
