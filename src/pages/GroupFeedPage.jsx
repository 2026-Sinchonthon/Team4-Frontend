import { Badge, NavigationBar } from '../shared/ui/index.js'
import logo from '../assets/auth-logo.svg'
import homeIcon from '../assets/navigation/home.svg'
import groupFeedIcon from '../assets/navigation/group-feed.svg'
import networkingIcon from '../assets/navigation/networking.svg'
import mypageIcon from '../assets/navigation/mypage.svg'
import createButton from '../assets/group-create-button.svg'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'

const sImages = [s1, s2, s3, s4, s5]

const categories = [
  { label: '전체', value: 'all' },
  { label: '스터디', value: 'study' },
  { label: '프로젝트', value: 'project' },
  { label: '취업', value: 'job' },
  { label: '창업', value: 'startup' },
  { label: '커피챗', value: 'coffee-chat' },
  { label: '네트워킹', value: 'networking' },
  { label: '기타', value: 'etc' },
]
const states = [
  { label: '모임 종료', tone: 'inactive' },
  { label: '참가자 모집 중', tone: 'solid' },
  { label: '모집 마감', tone: 'muted' },
  { label: '모임 종료', tone: 'inactive' },
  { label: '참가자 모집 중', tone: 'solid' },
  { label: '모집 마감', tone: 'muted' },
]
const navItems = [
  { label: '홈', href: '/', icon: <img src={homeIcon} alt="" /> },
  { label: '모임 피드', href: '/groups', icon: <img src={groupFeedIcon} alt="" />, isActive: true },
  { label: '네트워킹', href: '/networking', icon: <img src={networkingIcon} alt="" /> },
  { label: '마이 페이지', href: '/mypage', icon: <img src={mypageIcon} alt="" /> },
]

export function GroupFeedPage() {
  const activeCategory = new URLSearchParams(window.location.search).get('category') ?? 'all'

  return <div className="min-h-screen bg-white text-[#171617]"><NavigationBar brand={<img className="size-full object-contain" src={logo} alt="신촌링크" />} items={navItems} /><main className="ml-[300px] min-h-screen px-6 py-10 font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif]"><div className="mx-auto max-w-[1159px]"><nav className="flex flex-wrap gap-4" aria-label="모임 카테고리">{categories.map((category)=><a href={`/groups?category=${category.value}`} aria-current={activeCategory===category.value?'page':undefined} key={category.value}><Badge tone={activeCategory===category.value?'solid':'inactive'} size="lg">{category.label}</Badge></a>)}</nav><section className="mt-8 px-10 py-5"><h1 className="text-xl font-semibold">모집중인 모임</h1><div className="mt-7">{states.map((state,index)=><article className="flex min-h-[95px] items-center justify-between border-b border-[#F4F4F4] py-3" key={index}><div className="flex items-center gap-6"><img src={sImages[index%sImages.length]} alt="" className="size-[60px] shrink-0 rounded-2xl object-cover" /><div className="flex w-[182px] flex-col items-start gap-2"><Badge tone={state.tone} size="md">{state.label}</Badge><strong className="text-sm font-semibold leading-[1.5]">Spring boot 스터디</strong><p className="text-sm font-semibold leading-[1.5] text-[#858485]">스터디 | 연세대 외 2명</p></div></div><a className="rounded-lg px-5 py-2 text-base font-semibold leading-[1.3] tracking-[-0.08px] text-[#858485]" href={`/groups/${index + 1}`}>상세 보기</a></article>)}</div></section></div><a className="fixed bottom-10 right-10 size-20 rounded-full" href="/groups/new" aria-label="새 모임 만들기"><img className="size-full" src={createButton} alt="" /></a></main></div>
}