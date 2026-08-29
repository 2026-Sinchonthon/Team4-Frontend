const tones = { primary: 'bg-[#F0E9E3] text-[#7D5C42]', success: 'bg-emerald-50 text-emerald-700', warning: 'bg-amber-50 text-amber-700', neutral: 'bg-stone-100 text-stone-500' }

export function Badge({ children, tone = 'primary', className = '', ...props }) {
  return <span className={`inline-flex w-max items-center rounded-md px-2 py-1 text-[11px] font-bold leading-none ${tones[tone]} ${className}`} {...props}>{children}</span>
}
