const tones = {
  primary: 'bg-[#F0E9E3] text-[#7D5C42]',
  solid: 'bg-[#7D5C42] text-[#F8F2ED]',
  success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-amber-50 text-amber-700',
  neutral: 'bg-stone-100 text-stone-500',
}

const sizes = {
  sm: 'rounded-md px-2 py-1 text-[11px] leading-none',
  md: 'rounded-lg px-3 py-1 text-sm leading-[1.4]',
  lg: 'rounded-[20px] px-4 py-1 text-lg leading-[1.4]',
}

/**
 * 공통 배지 컴포넌트.
 * Figma 80:3027은 <Badge tone="solid" size="lg">스터디</Badge>로 사용합니다.
 */
export function Badge({ children, tone = 'primary', size = 'sm', className = '', ...props }) {
  return (
    <span
      className={`inline-flex w-max items-center justify-center whitespace-nowrap font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif] font-semibold ${tones[tone] ?? tones.primary} ${sizes[size] ?? sizes.sm} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
