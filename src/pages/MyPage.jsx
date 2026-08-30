import { Badge, NavigationBar } from '../shared/ui/index.js'
import logo from '../assets/auth-logo.svg'
import homeIcon from '../assets/navigation/home.svg'
import groupFeedIcon from '../assets/navigation/group-feed.svg'
import networkingIcon from '../assets/navigation/networking.svg'
import mypageIcon from '../assets/navigation/mypage.svg'
import profileImage from '../assets/mypage/raw-09.png'
import githubIcon from '../assets/mypage/github.png'
import groupImage from '../assets/mypage/raw-05.png'
import heroImage from '../assets/mypage/cover.svg'
import portfolioImage from '../assets/mypage/raw-11.png'
import { loadProfileImages } from '../shared/profileImages.js'

const navItems = [
  { label: '홈', href: '/home', icon: <img src={homeIcon} alt="" /> },
  { label: '모임 피드', href: '/groups', icon: <img src={groupFeedIcon} alt="" /> },
  { label: '네트워킹', href: '/networking', icon: <img src={networkingIcon} alt="" /> },
  { label: '마이 페이지', href: '/mypage', icon: <img src={mypageIcon} alt="" />, isActive: true },
]

const joinedGroups = [
  { id: 1, status: '모임 진행중', tone: 'solid' },
  { id: 2, status: '모임 종료', tone: 'inactive' },
  { id: 3, status: '모집 마감', tone: 'muted' },
]

const ownedGroups = [
  { id: 4, status: '모임 진행중', tone: 'solid' },
  { id: 5, status: '모임 종료', tone: 'inactive' },
  { id: 6, status: '모집 마감', tone: 'muted' },
]

function Section({ title, children, className = '' }) {
  return <section className={`rounded-[20px] border border-white/60 bg-white/75 px-10 py-5 shadow-[0_15px_40px_rgba(214,214,214,0.08)] ${className}`}><h2 className="text-xl font-semibold">{title}</h2><div className="mt-7">{children}</div></section>
}

function GroupCard({ group, last }) {
  return <a className={`flex min-w-0 flex-1 gap-6 pr-5 ${last ? '' : 'border-r border-[#F4F4F4]'}`} href={`/groups/${group.id}`}><img className="size-20 shrink-0 rounded-[20px] bg-[#DBBEA6] object-cover" src={groupImage} alt="" /><div className="flex min-w-0 flex-col gap-3"><Badge tone={group.tone} size="md">{group.status}</Badge><strong className="text-lg font-semibold">Spring boot 스터디</strong><p className="text-sm font-semibold text-[#858485]">스터디 | 연세대 외 3명</p></div></a>
}

function GroupSection({ title, groups }) {
  return <Section title={title}><div className="flex gap-7">{groups.map((group, index) => <GroupCard group={group} last={index === groups.length - 1} key={group.id} />)}</div></Section>
}

export function MyPage() {
  const savedImages = loadProfileImages({ cover: heroImage, profile: profileImage })

  return <div className="min-h-screen bg-white font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif] text-[#171617]">
    <NavigationBar brand={<img className="size-full object-contain" src={logo} alt="신촌링크" />} items={navItems} />
    <main className="ml-[300px] min-h-screen pb-16">
      <div className="relative h-[408px] overflow-hidden bg-[#E2CBB8]"><img className="size-full object-cover" src={savedImages.cover} alt="프로필 커버" /></div>
      <div className="mx-auto -mt-[113px] max-w-[1155px] px-7">
        <img className="relative size-[200px] rounded-full border-4 border-white bg-[#DBBEA6] object-cover" src={savedImages.profile} alt="김신촌 프로필" />
        <div className="mt-7 px-7">
          <div className="flex items-center gap-2 text-2xl" aria-label="외부 프로필"><a href="https://github.com" aria-label="GitHub"><img className="size-8 object-contain" src={githubIcon} alt="" /></a><a href="https://linkedin.com" aria-label="LinkedIn" className="font-bold text-[#2867B2]">in</a></div>
          <div className="mt-3 flex items-center gap-4"><h1 className="text-[28px] font-semibold leading-[1.2]">김신촌</h1><span className="rounded-full bg-[#7D5C42] px-4 py-1 text-lg font-semibold text-[#F8F2ED]">홍익대학교 3학년</span></div>
          <p className="mt-3 text-[22px] font-bold text-[#858485]">시각 디자인과 | UXUI Designer</p>
          <div className="mt-3 flex gap-2"><Badge tone="inactive" size="md">Figma</Badge><Badge tone="inactive" size="md">Adobe illustrator</Badge></div>
          <a className="mt-8 flex h-12 w-full items-center justify-center rounded-lg bg-[#F1E5DB] text-xl font-semibold text-[#7D5C42]" href="/mypage/edit">프로필 편집</a>

          <div className="mt-10 flex flex-col gap-10">
            <GroupSection title="참가한 모임" groups={joinedGroups} />
            <GroupSection title="내가 만든 모임" groups={ownedGroups} />
            <Section title="한줄 소개"><p className="text-lg leading-[1.4] text-[#545454]">같이 디자인 작업해용.. 주로 UXUI 디자인 합니다.</p></Section>
            <Section title="자기 소개"><p className="text-lg leading-[1.4] text-[#545454]">보기 좋은 화면을 넘어, ‘왜 이 디자인이어야 하는가’에 대한 근거를 찾는 과정을 중요하게 생각합니다. 데이터와 정성적 사용자 피드백 속에서 진짜 문제를 정의하고, 복잡한 비즈니스 요구사항을 단순하고 직관적인 사용자 경험으로 풀어냅니다.</p></Section>
            <Section title="활동 이력"><ul className="ml-7 list-disc text-lg leading-[1.4] text-[#545454]"><li>멋쟁이 사자처럼 14기 디자인</li></ul></Section>
            <Section title="포트폴리오"><img className="aspect-video w-full object-cover" src={portfolioImage} alt="PICDAY 포트폴리오" /><div className="mt-7 flex items-center justify-center gap-2 text-xl font-semibold text-[#545454]"><button type="button" aria-label="이전 포트폴리오">‹</button><span>01 | 08</span><button type="button" aria-label="다음 포트폴리오">›</button></div></Section>
          </div>
          <button className="mt-14 w-full text-center text-lg text-[#545454]" type="button">로그아웃</button>
        </div>
      </div>
    </main>
  </div>
}
