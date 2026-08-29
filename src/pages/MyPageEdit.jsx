import { useRef, useState } from 'react'
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
import penIcon from '../assets/mypage/edit-pen.svg'
import closeIcon from '../assets/mypage/edit-close.svg'
import plusIcon from '../assets/Navigationbar_plus.svg'
import { loadProfileImages, readImageFile, saveProfileImages } from '../shared/profileImages.js'

const navItems = [
  { label: '홈', href: '/', icon: <img src={homeIcon} alt="" /> },
  { label: '모임 피드', href: '/groups', icon: <img src={groupFeedIcon} alt="" /> },
  { label: '네트워킹', href: '/networking', icon: <img src={networkingIcon} alt="" /> },
  { label: '마이 페이지', href: '/mypage', icon: <img src={mypageIcon} alt="" />, isActive: true },
]

const groups = [
  { id: 1, status: '모임 진행중', tone: 'solid' },
  { id: 2, status: '모임 종료', tone: 'inactive' },
  { id: 3, status: '모집 마감', tone: 'muted' },
]

function EditTitle({ children }) {
  return <div className="flex items-center gap-2"><img className="size-9" src={penIcon} alt="" /><h2 className="text-xl font-semibold text-[#858485]">{children}</h2></div>
}

function EditSection({ title, children }) {
  return <section className="rounded-[20px] border border-white/60 bg-white/75 px-10 py-5 shadow-[0_15px_40px_rgba(214,214,214,0.08)]"><EditTitle>{title}</EditTitle><div className="mt-7">{children}</div></section>
}

function GroupSection({ title }) {
  return <section className="rounded-[20px] bg-white/75 px-10 py-5 shadow-[0_15px_40px_rgba(214,214,214,0.08)]"><h2 className="text-xl font-semibold">{title}</h2><div className="mt-7 flex gap-7">{groups.map((group, index) => <a className={`flex min-w-0 flex-1 gap-6 pr-5 ${index < groups.length - 1 ? 'border-r border-[#F4F4F4]' : ''}`} href={`/groups/${group.id}`} key={group.id}><img className="size-20 rounded-[20px] object-cover" src={groupImage} alt="" /><div className="flex flex-col gap-3"><Badge tone={group.tone} size="md">{group.status}</Badge><strong className="text-lg">Spring boot 스터디</strong><p className="text-sm text-[#858485]">스터디 | 연세대 외 3명</p></div></a>)}</div></section>
}

const inputClass = 'w-full rounded-lg border border-transparent bg-transparent text-lg leading-[1.4] text-[#545454] outline-none transition focus:border-[#DBBEA6] focus:bg-white focus:px-3 focus:py-2'

export function MyPageEdit() {
  const [profileImages, setProfileImages] = useState(() => loadProfileImages({ cover: heroImage, profile: profileImage }))
  const [imageError, setImageError] = useState('')
  const [portfolioPreview, setPortfolioPreview] = useState(portfolioImage)
  const fileInputRef = useRef(null)
  const coverInputRef = useRef(null)
  const profileInputRef = useRef(null)

  const handleProfileImageChange = async (event, type) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const preview = await readImageFile(file)
      setProfileImages((current) => ({ ...current, [type]: preview }))
      setImageError('')
    } catch (error) {
      setImageError(error.message)
      event.target.value = ''
    }
  }
  const handlePortfolioChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (portfolioPreview?.startsWith('blob:')) URL.revokeObjectURL(portfolioPreview)
    setPortfolioPreview(URL.createObjectURL(file))
  }
  const removePortfolio = () => {
    if (portfolioPreview?.startsWith('blob:')) URL.revokeObjectURL(portfolioPreview)
    setPortfolioPreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      saveProfileImages(profileImages)
      window.location.href = '/mypage'
    } catch {
      setImageError('이미지를 저장하지 못했어요. 더 작은 이미지를 선택해 주세요.')
    }
  }

  return <div className="min-h-screen bg-white font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif] text-[#171617]">
    <NavigationBar brand={<img className="size-full object-contain" src={logo} alt="신촌링크" />} items={navItems} />
    <main className="ml-[300px] min-h-screen pb-16">
      <div className="group relative h-[408px] overflow-hidden bg-[#E2CBB8]">
        <img className="size-full object-cover" src={profileImages.cover} alt="프로필 커버 미리보기" />
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
        <input ref={coverInputRef} className="sr-only" type="file" accept="image/*" onChange={(event) => handleProfileImageChange(event, 'cover')} />
        <button className="absolute bottom-6 right-8 rounded-lg bg-white/95 px-5 py-3 text-base font-semibold text-[#545454] shadow-md transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D5C42]" type="button" onClick={() => coverInputRef.current?.click()}>
          배경 사진 변경
        </button>
      </div>
      <form className="mx-auto -mt-[113px] max-w-[1155px] px-7" onSubmit={handleSubmit}>
        <div className="group relative size-[200px]">
          <img className="size-full rounded-full border-4 border-white bg-[#DBBEA6] object-cover" src={profileImages.profile} alt="김신촌 프로필 미리보기" />
          <input ref={profileInputRef} className="sr-only" type="file" accept="image/*" onChange={(event) => handleProfileImageChange(event, 'profile')} />
          <button className="absolute inset-1 flex items-center justify-center rounded-full bg-black/0 text-sm font-semibold text-transparent transition group-hover:bg-black/45 group-hover:text-white focus-visible:bg-black/45 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D5C42]" type="button" onClick={() => profileInputRef.current?.click()} aria-label="프로필 사진 변경">
            프로필 사진 변경
          </button>
        </div>
        <div className="mt-7 px-7">
          {imageError && <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600" role="alert">{imageError}</p>}
          <div className="flex items-center gap-2 text-2xl"><img className="size-8 object-contain" src={githubIcon} alt="GitHub" /><span className="font-bold text-[#2867B2]">in</span></div>
          <div className="mt-3 flex items-center gap-4"><div className="flex items-center gap-2"><img className="size-9" src={penIcon} alt="" /><input className="w-32 text-[28px] font-semibold text-[#858485] outline-none" name="name" defaultValue="김신촌" aria-label="이름" /></div><span className="rounded-full bg-[#7D5C42] px-4 py-1 text-lg font-semibold text-[#F8F2ED]">홍익대학교 3학년</span></div>
          <input className="mt-3 w-full text-[22px] font-bold text-[#858485] outline-none" name="role" defaultValue="시각 디자인과 | UXUI Designer" aria-label="전공 및 직무" />
          <div className="mt-3 flex gap-2"><Badge tone="inactive" size="md">Figma</Badge><Badge tone="inactive" size="md">Adobe illustrator</Badge></div>
          <button className="mt-8 h-12 w-full rounded-lg bg-[#DEDEDE] text-xl font-semibold text-[#858485]" type="submit">편집 완료</button>
          <div className="mt-10 flex flex-col gap-10">
            <GroupSection title="참가한 모임" />
            <GroupSection title="내가 만든 모임" />
            <EditSection title="한줄 소개"><input className={inputClass} name="headline" defaultValue="같이 디자인 작업해용.. 주로 UXUI 디자인 합니다." /></EditSection>
            <EditSection title="자기 소개"><textarea className={`${inputClass} min-h-24 resize-y`} name="introduction" defaultValue="보기 좋은 화면을 넘어, ‘왜 이 디자인이어야 하는가’에 대한 근거를 찾는 과정을 중요하게 생각합니다. 데이터와 정성적 사용자 피드백 속에서 진짜 문제를 정의하고, 복잡한 비즈니스 요구사항을 단순하고 직관적인 사용자 경험으로 풀어냅니다." /></EditSection>
            <EditSection title="활동 이력"><textarea className={`${inputClass} min-h-16 resize-y`} name="history" defaultValue="• 멋쟁이 사자처럼 14기 디자인" /></EditSection>
            <EditSection title="포트폴리오">
              {portfolioPreview && <div className="relative mx-auto max-w-[891px]"><img className="aspect-video w-full object-cover" src={portfolioPreview} alt="포트폴리오 미리보기" /><button className="absolute right-3 top-3" type="button" onClick={removePortfolio} aria-label="포트폴리오 삭제"><img className="size-9" src={closeIcon} alt="" /></button></div>}
              <input ref={fileInputRef} className="sr-only" type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={handlePortfolioChange} />
              <button className="mt-7 flex h-12 w-full items-center justify-center rounded-[20px] bg-[#F4F4F4]" type="button" onClick={() => fileInputRef.current?.click()} aria-label="포트폴리오 사진 추가"><img className="size-6" src={plusIcon} alt="" /></button>
            </EditSection>
          </div>
          <a className="mt-14 block w-full text-center text-lg text-[#545454]" href="/mypage">로그아웃</a>
        </div>
      </form>
    </main>
  </div>
}
