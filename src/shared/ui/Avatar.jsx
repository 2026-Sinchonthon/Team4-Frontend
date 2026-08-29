const sizes = { sm: 'size-7 text-[10px]', md: 'size-9 text-sm', lg: 'size-12 text-base', xl: 'size-21 text-2xl' }

export function Avatar({ name, imageUrl, size = 'md', className = '', ...props }) {
  return <div className={`grid place-items-center overflow-hidden rounded-full bg-[#F2D7C4] font-bold text-[#6E4434] ${sizes[size]} ${className}`} aria-label={`${name} 프로필`} {...props}>{imageUrl ? <img src={imageUrl} alt="" className="size-full object-cover" /> : name.trim().slice(-2)}</div>
}
