function LandingPage(){
  return (
    <div className="flex min-h-screen w-full items-center bg-white text-[#171617]">
      <div className="flex-1 px-16">
        <h1 className="text-4xl font-bold leading-[1.4]">
          신촌의 사람과<br/>
          기회를 <span className="text-[#DBBEA6]">ON</span>하다
        </h1>
      </div>
      <div className="flex flex-1 flex-col items-center gap-8 px-16">
        <img src={authLogo} alt="신촌ON" className="h-12 w-auto object-contain"/>
        <button
          type="button"
          onClick={()=>{
            localStorage.setItem('isLoggedIn', 'true')
            window.location.href = '/home'
          }}
          className="w-64 rounded-lg bg-[#F8F2ED] py-3 text-sm font-medium text-[#DBBEA6]"
        >
          학교 이메일 로그인
        </button>
        <a href="/signup" className="text-xs text-[#A2A2A2]">회원가입</a>
      </div>
    </div>
  )
}
function App(){
  const path = window.location.pathname
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  if (path === '/signup' || path === '/onboarding') {
    return <AuthPage />
  }

  if (path === '/home') {
    return <HomeApp />
  }

  if (path === '/groups/new') {
    return <GroupEditPage mode="create" />
  }

  if (/^\/groups\/[^/]+\/edit$/.test(path)) {
    return <GroupEditPage />
  }

  if (/^\/groups\/[^/]+$/.test(path)) {
    return <GroupDetailPage />
  }

  if (path === '/groups') {
    return <GroupFeedPage />
  }

  if (path === '/networking') {
    return <NetworkingPage />
  }

  if (path === '/mypage/edit') {
    return <MyPageEdit />
  }

  if (path === '/mypage') {
    return <MyPage />
  }

  if (path === '/' && isLoggedIn) {
    return <HomeApp />
  }

  return <LandingPage />
}
export default App