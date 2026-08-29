const variants = {
  primary: 'bg-[#7D5C42] text-[#F8F2ED] hover:bg-[#684B34]',
  secondary: 'border border-stone-200 bg-white text-stone-800 hover:bg-stone-50',
  ghost: 'text-[#7D5C42] hover:bg-stone-100',
  danger: 'bg-red-50 text-red-600 hover:bg-red-100',
  muted: 'bg-[#858485] text-[#DEDEDE]',
}

const sizes = {
  sm: 'min-h-8 px-3 py-1.5 text-sm',
  md: 'min-h-[37px] px-5 py-2 text-base leading-[1.3] tracking-[-0.08px]',
  lg: 'min-h-12 px-6 py-3 text-lg',
}

/**
 * 공통 버튼 컴포넌트 (Figma 80:3050)
 * disabled 상태는 Figma Variant2, muted variant는 Variant3에 대응합니다.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const isDisabled = disabled || isLoading

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-0 font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#E9D8CA] disabled:cursor-not-allowed disabled:bg-[#DEDEDE] disabled:text-[#858485] ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {isLoading && <span className="size-3 animate-spin rounded-full border-2 border-current border-r-transparent" aria-hidden="true" />}
      {children}
    </button>
  )
}
