const variants = {
  primary: 'bg-[#7D5C42] text-white hover:bg-[#684B34]',
  secondary: 'border border-stone-200 bg-white text-stone-800 hover:bg-stone-50',
  ghost: 'text-[#7D5C42] hover:bg-stone-100',
  danger: 'bg-red-50 text-red-600 hover:bg-red-100',
}
const sizes = { sm: 'min-h-8 px-3 text-xs', md: 'min-h-10 px-4 text-sm', lg: 'min-h-12 px-5 text-base' }

export function Button({ children, variant = 'primary', size = 'md', fullWidth = false, isLoading = false, className = '', disabled, type = 'button', ...props }) {
  return <button type={type} disabled={disabled || isLoading} className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition focus:outline-none focus:ring-3 focus:ring-stone-200 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`} {...props}>{isLoading && <span className="size-3 animate-spin rounded-full border-2 border-current border-r-transparent" aria-hidden="true" />}{children}</button>
}
