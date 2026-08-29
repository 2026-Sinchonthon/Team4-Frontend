import { useEffect, useState } from 'react'
import authLogo from '../assets/auth-logo.svg'
import loginLogo from '../assets/login-logo.svg'
import { authApi } from '../shared/api/auth.js'
import { profilesApi } from '../shared/api/profiles.js'

const schools = ['연세대학교', '서강대학교', '홍익대학교', '이화여자대학교']
const positions = ['FRONTEND', 'BACKEND', 'FULLSTACK', 'AI_ML', 'DATA', 'MOBILE', 'DESIGN', 'PM', 'MARKETING', 'BUSINESS', 'OTHER']
const positionLabels = { FRONTEND: '프론트엔드', BACKEND: '백엔드', FULLSTACK: '풀스택', AI_ML: 'AI/ML', DATA: '데이터', MOBILE: '모바일', DESIGN: 'UX/UI 디자인', PM: '기획', MARKETING: '마케팅', BUSINESS: '비즈니스', OTHER: '기타' }
const skillOptions = ['Java', 'Spring', 'Spring Boot', 'JavaScript', 'React', 'TypeScript', 'Python', 'Figma', 'Adobe Illustrator', 'AWS']

const fieldClass = 'mt-2 h-12 w-full rounded-lg border border-[#DEDEDE] bg-white px-4 text-base outline-none transition placeholder:text-[#A2A2A2] focus:border-[#7D5C42] focus:ring-2 focus:ring-[#F1E5DB]'
const labelClass = 'block text-sm font-semibold text-[#545454]'

function LoginLandingPage() {
  return <main className="flex min-h-screen items-center bg-white px-7 py-12 font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif] text-[#171617]">
    <div className="mx-auto flex w-full max-w-[1000px] items-center justify-between gap-20 max-lg:max-w-[520px] max-lg:flex-col max-lg:justify-center">
      <h1 className="shrink-0 text-[70px] font-bold leading-[1.2] tracking-[-1.4px] max-lg:text-center max-sm:text-[44px]">
        신촌의 사람과<br />기회를 <span className="text-[#DBBEA6]">ON</span>하다
      </h1>
      <section className="flex w-[320px] shrink-0 flex-col items-center justify-center gap-[60px]" aria-label="로그인 메뉴">
        <a href="/login" aria-label="로그인 첫 화면으로 이동"><img className="h-auto w-[310px]" src={loginLogo} alt="신촌ON" /></a>
        <div className="flex w-full flex-col items-stretch gap-5">
          <a className="flex h-12 items-center justify-center rounded-lg bg-[#F8F2ED] px-8 text-xl font-semibold text-[#7D5C42] transition hover:bg-[#F1E5DB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D5C42]" href="/login/email">학교 이메일 로그인</a>
          <a className="h-7 text-center text-xl leading-[1.4] text-[#A2A2A2] transition hover:text-[#7D5C42] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D5C42]" href="/signup">회원가입</a>
        </div>
      </section>
    </div>
  </main>
}

function AuthShell({ eyebrow, title, description, children, wide = false }) {
  return <main className="min-h-screen bg-white px-7 py-12 font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif] text-[#171617]">
    <div className={`mx-auto min-h-[calc(100vh-6rem)] items-center ${wide ? 'flex max-w-[720px] justify-center' : 'grid max-w-[1230px] grid-cols-[1fr_520px] gap-20'}`}>
      {!wide && <section className="hidden lg:block"><p className="text-[64px] font-bold leading-[1.2] tracking-[-1.4px]"><span className="text-[#7D5C42]">신촌</span>의 사람과<br />기회를 <span className="text-[#7D5C42]">ON</span>하다</p><p className="mt-8 max-w-lg text-lg leading-[1.6] text-[#858485]">신촌의 대학생이 학교의 경계를 넘어 함께 배우고, 만들고, 연결되는 공간입니다.</p></section>}
      <section className="w-full rounded-[24px] border border-[#F4F4F4] bg-white px-12 py-10 shadow-[0_18px_50px_rgba(125,92,66,0.08)]">
        <a className="inline-block" href="/login" aria-label="로그인 첫 화면으로 이동"><img className="h-auto w-[220px]" src={authLogo} alt="신촌ON" /></a>
        {eyebrow && <p className="mt-10 text-sm font-semibold text-[#7D5C42]">{eyebrow}</p>}
        <h1 className={`${eyebrow ? 'mt-2' : 'mt-10'} text-[32px] font-bold tracking-[-0.64px]`}>{title}</h1>
        <p className="mt-3 text-base leading-[1.5] text-[#858485]">{description}</p>
        <div className="mt-9">{children}</div>
      </section>
    </div>
  </main>
}

function SignupPage() {
  const [error, setError] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (form.get('password') !== form.get('passwordConfirm')) {
      event.currentTarget.passwordConfirm.setCustomValidity('비밀번호가 일치하지 않습니다.')
      event.currentTarget.passwordConfirm.reportValidity()
      return
    }
    try {
      const credentials = { email: form.get('email'), password: form.get('password') }
      await authApi.signup({ ...credentials, name: form.get('name') })
      await authApi.login(credentials)
      window.location.href = '/onboarding'
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return <AuthShell eyebrow="학교 이메일 회원가입" title="신촌에서 연결을 시작해요" description="학교 이메일을 인증하고 나에게 맞는 프로필을 완성해주세요.">
    <form className="space-y-6" onSubmit={handleSubmit}>
      <label className={labelClass}>이름<input className={fieldClass} name="name" maxLength="50" required /></label>
      <label className={labelClass}>아이디 (학교 이메일)<input className={fieldClass} name="email" type="email" placeholder="name@university.ac.kr" required /></label>
      <label className={labelClass}>비밀번호<input className={fieldClass} name="password" type="password" minLength="8" placeholder="영문, 숫자 포함 8자 이상" required /></label>
      <label className={labelClass}>비밀번호 확인<input className={fieldClass} name="passwordConfirm" type="password" minLength="8" placeholder="비밀번호를 다시 입력해주세요" onInput={(event) => event.currentTarget.setCustomValidity('')} required /></label>
      <label className="flex items-start gap-3 text-sm leading-[1.5] text-[#858485]"><input className="mt-1 accent-[#7D5C42]" type="checkbox" required /><span>서비스 이용약관과 개인정보 처리방침에 동의합니다.</span></label>
      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
      <button className="h-12 w-full rounded-lg bg-[#7D5C42] text-lg font-semibold text-white hover:bg-[#674A35]" type="submit">가입 완료</button>
      <p className="text-center text-sm text-[#A2A2A2]">이미 계정이 있나요? <a className="font-semibold text-[#7D5C42]" href="/login/email">로그인</a></p>
    </form>
  </AuthShell>
}

function EmailLoginPage() {
  const [error, setError] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    try {
      await authApi.login({ email: form.get('email'), password: form.get('password') })
      window.location.href = '/home'
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return <AuthShell eyebrow="학교 이메일 로그인" title="다시 만나서 반가워요" description="학교 이메일과 비밀번호를 입력해주세요.">
    <form className="space-y-6" onSubmit={handleSubmit}>
      <label className={labelClass}>아이디 (학교 이메일)<input className={fieldClass} name="email" type="email" autoComplete="email" placeholder="name@university.ac.kr" required /></label>
      <label className={labelClass}>비밀번호<input className={fieldClass} name="password" type="password" autoComplete="current-password" minLength="8" placeholder="비밀번호를 입력해주세요" required /></label>
      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
      <button className="h-12 w-full rounded-lg bg-[#7D5C42] text-lg font-semibold text-white hover:bg-[#674A35]" type="submit">로그인</button>
      <p className="text-center text-sm text-[#A2A2A2]">아직 계정이 없나요? <a className="font-semibold text-[#7D5C42]" href="/signup">회원가입</a></p>
    </form>
  </AuthShell>
}

function OnboardingPage() {
  const [selectedPositions, setSelectedPositions] = useState([])
  const [positionOptions, setPositionOptions] = useState(positions)
  const [newPosition, setNewPosition] = useState('')
  const [skills, setSkills] = useState([])
  const [skillChoices, setSkillChoices] = useState(skillOptions)
  const [newSkill, setNewSkill] = useState('')
  const [skillMap, setSkillMap] = useState({})
  const [error, setError] = useState('')
  useEffect(() => {
    profilesApi.skills().then((items) => {
      setSkillChoices(items.map((item) => item.name))
      setSkillMap(Object.fromEntries(items.map((item) => [item.name, item.id])))
    }).catch((requestError) => setError(requestError.message))
  }, [])
  const togglePosition = (position) => setSelectedPositions((current) => current.includes(position) ? current.filter((item) => item !== position) : [...current, position])
  const toggleSkill = (skill) => setSkills((current) => current.includes(skill) ? current.filter((item) => item !== skill) : [...current, skill])
  const addPosition = () => {
    const value = newPosition.trim()
    if (!value || positionOptions.includes(value)) return
    setPositionOptions((current) => [...current, value])
    setSelectedPositions((current) => [...current, value])
    setNewPosition('')
  }
  const addSkill = () => {
    const value = newSkill.trim()
    if (!value || skillChoices.includes(value)) return
    setSkillChoices((current) => [...current, value])
    setSkills((current) => [...current, value])
    setNewSkill('')
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const profile = Object.fromEntries(new FormData(event.currentTarget))
    if (!selectedPositions.length) return setError('관심 직무를 하나 이상 선택해주세요.')
    try {
      await profilesApi.create({
        nickname: profile.name,
        school: profile.school,
        major: profile.major,
        grade: Number(profile.grade),
        position: selectedPositions[0],
        introduction: profile.introduction,
        profileImageUrl: null,
        githubUrl: profile.githubUrl || null,
        linkedinUrl: profile.linkedinUrl || null,
        portfolioUrl: profile.portfolioUrl || null,
        skillIds: skills.map((skill) => skillMap[skill]).filter(Boolean),
      })
      window.location.href = '/home'
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return <AuthShell wide eyebrow="" title="나를 소개해주세요" description="입력한 정보는 네트워킹 프로필과 마이페이지에 사용됩니다.">
    <form className="space-y-8" onSubmit={handleSubmit}>
      <section><h2 className="mb-5 text-lg font-semibold">기본 정보</h2><div className="grid grid-cols-2 gap-5"><label className={labelClass}>이름<input className={fieldClass} name="name" required /></label><label className={labelClass}>학교<select className={fieldClass} name="school" defaultValue="" required><option value="" disabled>학교 선택</option>{schools.map((school) => <option key={school}>{school}</option>)}</select></label><label className={labelClass}>학과<input className={fieldClass} name="major" required /></label><label className={labelClass}>학년<select className={fieldClass} name="grade" defaultValue="" required><option value="" disabled>학년 선택</option>{[1, 2, 3, 4, 5].map((grade) => <option value={grade} key={grade}>{grade}학년</option>)}</select></label></div></section>
      <section><div className="flex items-end justify-between"><h2 className="text-lg font-semibold">관심 직무</h2><span className="text-xs text-[#A2A2A2]">복수 선택 가능</span></div><div className="mt-4 grid grid-cols-3 gap-2">{positionOptions.map((position) => <button className={`flex h-11 items-center justify-center rounded-lg text-sm font-semibold ${selectedPositions.includes(position) ? 'bg-[#7D5C42] text-white' : 'bg-[#F4F4F4] text-[#858485]'}`} type="button" aria-pressed={selectedPositions.includes(position)} onClick={() => togglePosition(position)} key={position}>{positionLabels[position] ?? position}</button>)}</div><div className="mt-3 flex gap-2"><input className={fieldClass} value={newPosition} onChange={(event) => setNewPosition(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); addPosition() } }} placeholder="직무 직접 입력" /><button className="mt-2 shrink-0 rounded-lg bg-[#F1E5DB] px-5 font-semibold text-[#7D5C42]" type="button" onClick={addPosition}>추가</button></div></section>
      <section><div className="flex items-end justify-between"><h2 className="text-lg font-semibold">기술 스택</h2><span className="text-xs text-[#A2A2A2]">복수 선택 가능</span></div><div className="mt-4 flex flex-wrap gap-2">{skillChoices.map((skill) => <button className={`rounded-lg px-4 py-2 text-sm font-semibold ${skills.includes(skill) ? 'bg-[#7D5C42] text-white' : 'bg-[#F4F4F4] text-[#858485]'}`} type="button" aria-pressed={skills.includes(skill)} onClick={() => toggleSkill(skill)} key={skill}>{skill}</button>)}</div><div className="mt-3 flex gap-2"><input className={fieldClass} value={newSkill} onChange={(event) => setNewSkill(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); addSkill() } }} placeholder="기술 스택 직접 입력" /><button className="mt-2 shrink-0 rounded-lg bg-[#F1E5DB] px-5 font-semibold text-[#7D5C42]" type="button" onClick={addSkill}>추가</button></div></section>
      <section><h2 className="mb-5 text-lg font-semibold">프로필 소개</h2><div className="space-y-5"><label className={labelClass}>한줄 소개<input className={fieldClass} name="headline" maxLength="80" placeholder="함께 만들고 싶은 일을 한 줄로 소개해주세요" required /></label><label className={labelClass}>자기 소개<textarea className={`${fieldClass} min-h-28 resize-y py-3`} name="introduction" placeholder="관심 분야와 경험, 하고 싶은 일을 자유롭게 적어주세요" required /></label><label className={labelClass}>활동 이력<textarea className={`${fieldClass} min-h-20 resize-y py-3`} name="history" placeholder="동아리, 프로젝트, 대외활동 등을 적어주세요" /></label></div></section>
      <section><h2 className="mb-5 text-lg font-semibold">외부 링크</h2><div className="space-y-5"><label className={labelClass}>GitHub<input className={fieldClass} name="githubUrl" type="url" placeholder="https://github.com/username" /></label><label className={labelClass}>LinkedIn<input className={fieldClass} name="linkedinUrl" type="url" placeholder="https://linkedin.com/in/username" /></label><label className={labelClass}>포트폴리오 URL<input className={fieldClass} name="portfolioUrl" type="url" placeholder="https://my-portfolio.com" /></label></div></section>
      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
      <button className="h-12 w-full rounded-lg bg-[#7D5C42] text-lg font-semibold text-white hover:bg-[#674A35]" type="submit">프로필 완성하기</button>
    </form>
  </AuthShell>
}

export function AuthPage() {
  if (window.location.pathname === '/' || window.location.pathname === '/login') return <LoginLandingPage />
  if (window.location.pathname === '/login/email') return <EmailLoginPage />
  return window.location.pathname === '/onboarding' ? <OnboardingPage /> : <SignupPage />
}
