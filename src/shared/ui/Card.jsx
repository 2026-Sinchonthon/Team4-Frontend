const padding = { none: '', sm: 'p-3', md: 'p-5', lg: 'p-7' }

export function Card({ children, padding: paddingSize = 'md', interactive = false, className = '', ...props }) {
  return <article className={`rounded-xl border border-stone-200 bg-white ${padding[paddingSize]} ${interactive ? 'cursor-pointer transition hover:-translate-y-0.5 hover:shadow-lg' : ''} ${className}`} {...props}>{children}</article>
}
