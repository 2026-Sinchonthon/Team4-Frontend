import homeIcon from '../../assets/navigation/home.svg'

export function LoginPage(){
  return (
    <div className="grid min-h-screen grid-cols-2 items-center bg-white px-16">
      <div>
        <h1 className="text-4xl font-bold leading-snug text-[#171617]">
          신촌의 사람과<br/>
          기회를 <span className="text-[#DBBEA6]">ON</span>하다
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-10 flex items-center gap-1 text-4xl font-extrabold tracking-tight">
          <span className="text-[#171617]">신촌</span>
          <span className="text-[#DBBEA6]">ON</span>
        </div>
        <button
          type="button"
          onClick={()=>{ window.location.href='/login/email' }}
          className="w-[260px] rounded-lg bg-[#E7DDD3] px-6 py-3 text-sm font-semibold text-[#5B4530]"
        >
          학교 이메일 로그인
        </button>
        <a href="/signup" className="mt-4 text-sm text-[#A2A2A2]">회원가입</a>
      </div>
    </div>
  )
}