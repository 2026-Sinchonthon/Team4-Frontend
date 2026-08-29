import { NavigationBar } from './shared/ui/index.js'
import logo from './assets/navigation/logo.svg'
import homeIcon from './assets/navigation/home.svg'
import groupFeedIcon from './assets/navigation/group-feed.svg'
import networkingIcon from './assets/navigation/networking.svg'
import mypageIcon from './assets/navigation/mypage.svg'
import searchIcon from './assets/search.svg'

const navItems = [
  { label: '홈', href: '/', icon: <img src={homeIcon} alt="" />, isActive: true },
  { label: '모임 피드', href: '/groups', icon: <img src={groupFeedIcon} alt="" /> },
  { label: '네트워킹', href: '/networking', icon: <img src={networkingIcon} alt="" /> },
  { label: '마이 페이지', href: '/mypage', icon: <img src={mypageIcon} alt="" /> },
]

const Arrow = () => <span className="text-[38px] font-light leading-none text-[#858485]" aria-hidden="true">›</span>

function MeetingRow({ action = false }) {
  return <div className="flex items-center gap-6 border-b border-[#EFEFEF] py-3.5 last:border-0"><div className="size-[50px] shrink-0 rounded-[15px] bg-[#DFC2A9]" /><div><p className="text-base font-semibold text-[#555354]">Spring boot 스터디</p><p className="mt-2 text-sm text-[#858485]">프로젝트</p></div>{action && <button className="ml-auto rounded-lg bg-[#F8F2ED] px-4 py-2 text-sm font-semibold text-[#7D5C42]">참여하기</button>}</div>
}

function HomeCard({ title, children, className = '' }) {
  return <section className={`rounded-[20px] border border-[#EFEFEF] bg-white p-10 ${className}`}><header className="mb-5 flex items-center justify-between"><h2 className="text-xl font-bold tracking-[-0.04em]">{title}</h2><button aria-label={`${title} 더 보기`}><Arrow /></button></header>{children}</section>
}

function App() {
  return <div className="min-h-screen bg-white text-[#171717]"><NavigationBar brand={<img className="size-full object-contain" src={logo} alt="신촌링크" />} items={navItems} /><main className="ml-[300px] min-h-screen px-12 py-7"><div className="mx-auto max-w-[1160px]"><label className="flex h-[58px] items-center gap-5 rounded-[32px] border border-[#F0F0F0] px-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"><img className="size-6 opacity-55" src={searchIcon} alt="" /><input className="w-full bg-transparent text-lg font-medium text-[#555354] outline-none placeholder:text-[#A9A7A7]" placeholder="모임, 사람 등 필요한 것을 검색해보세요." /></label><h1 className="mb-9 mt-12 text-[28px] font-bold tracking-[-0.06em]">신촌 님, 안녕하세요 !</h1><div className="grid grid-cols-[1fr_1.22fr] gap-6"><HomeCard title="내 프로필" className="h-[228px]"><div className="flex items-center gap-6"><div className="size-[134px] shrink-0 rounded-full bg-[#DFC2A9]" /><div><span className="inline-block rounded-full bg-[#7D5C42] px-5 py-1.5 text-xs font-medium text-white">같이 디자인 작업해요.. 주로 UXUI 디자인 합니다.</span><div className="mt-5 flex items-center gap-3"><b className="text-lg">김신촌</b><span className="rounded-full bg-[#F8F2ED] px-3 py-1 text-xs font-semibold text-[#7D5C42]">홍익대학교</span></div><p className="mt-4 text-sm font-medium text-[#858485]">시각 디자인과 | UXUI Designer</p><p className="mt-3 text-sm font-semibold text-[#555354]">Figma | Photoshop</p></div></div></HomeCard><div className="flex flex-col gap-6"><HomeCard title="참가 중인 모임" className="h-[244px]"><MeetingRow /><MeetingRow /></HomeCard><HomeCard title="추천 모임" className="h-[244px]"><MeetingRow action /><MeetingRow /></HomeCard></div></div></div></main></div>
}

export default App
