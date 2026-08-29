/**
 * 피그마 노드 41:1661을 기준으로 한 공통 좌측 네비게이션입니다.
 * 화면별로 `items`의 isActive만 변경해 사용합니다.
 */
export function NavigationBar({ brand, items, onNavigate, className = '' }) {
  const handleNavigation = (event, href) => {
    if (!onNavigate) return
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <aside className={`fixed inset-y-0 left-0 z-10 flex w-[300px] flex-col gap-10 rounded-r-[20px] bg-[#F8F2ED] px-7 py-10 font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif] shadow-[0_15px_40px_rgba(206,206,206,0.08)] ${className}`}>
      <a className="block size-auto h-8 w-[132px]" href="/" aria-label="홈으로 이동" onClick={(event) => handleNavigation(event, '/')}>
        {brand}
      </a>
      <nav className="flex w-[244px] flex-col gap-7" aria-label="주요 메뉴">
        {items.map(({ label, href, icon, iconWidth = 32, isActive }) => (
          <a
            key={href}
            href={href}
            aria-current={isActive ? 'page' : undefined}
            onClick={(event) => handleNavigation(event, href)}
            className={`flex h-12 w-[244px] items-center gap-4 rounded-lg py-3 pl-4 pr-5 text-lg font-semibold leading-none transition-colors ${isActive ? 'bg-[#F1E5DB] text-[#7D5C42]' : 'text-[#858485] hover:bg-[#F1E5DB]/60'}`}
          >
            <span style={{ width: iconWidth }} className="flex h-8 shrink-0 items-center justify-center">
              {icon?.props?.src ? (
                <span
                  aria-hidden="true"
                  className="size-full bg-current"
                  style={{
                    WebkitMaskImage: `url("${icon.props.src}")`,
                    maskImage: `url("${icon.props.src}")`,
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                  }}
                />
              ) : icon}
            </span>
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
