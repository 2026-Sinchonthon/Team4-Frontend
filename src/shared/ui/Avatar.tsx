import type { HTMLAttributes } from 'react'
import './ui.css'

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  imageUrl?: string
  size?: AvatarSize
}

export function Avatar({ name, imageUrl, size = 'md', className = '', ...props }: AvatarProps) {
  const initials = name.trim().slice(-2)
  return (
    <div className={`ui-avatar ui-avatar--${size} ${className}`.trim()} aria-label={`${name} 프로필`} {...props}>
      {imageUrl ? <img src={imageUrl} alt="" /> : initials}
    </div>
  )
}
