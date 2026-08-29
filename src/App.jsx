import { NavigationBar } from './shared/ui/index.js'
import { GroupFeedPage } from './pages/GroupFeedPage.jsx'
import { NetworkingPage } from './pages/networking/NetworkingPage.jsx'
import logo from './assets/navigation/logo.svg'
import homeIcon from './assets/navigation/home.svg'
import groupFeedIcon from './assets/navigation/group-feed.svg'
import networkingIcon from './assets/navigation/networking.svg'
import mypageIcon from './assets/navigation/mypage.svg'
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.jpg'
import s1 from './assets/s1.jpg'
import s2 from './assets/s2.jpg'
import s3 from './assets/s3.jpg'
import s4 from './assets/s4.jpg'
import s5 from './assets/s5.jpg'
import c1 from './assets/c1.jpg'
import c2 from './assets/c2.jpg'
import c3 from './assets/c3.jpg'
import c4 from './assets/c4.jpg'
const navItems=[{label:'홈',href:'/',icon:<img src={homeIcon} alt=""/>,isActive:true},{label:'모임 피드',href:'/groups',icon:<img src={groupFeedIcon} alt=""/>},{label:'네트워킹',href:'/networking',icon:<img src={networkingIcon} alt=""/>},{label:'마이 페이지',href:'/mypage',icon:<img src={mypageIcon} alt=""/>}]
const members=['연세대 외 2명','서강대 외 3명','홍익대 외 3명']
const rowImages=[p1,p2,p3,p4,s1,s2,s3,s4,s5]
const pImages=[s1,s2,s3]
const joinedImages=[s4,s5]
const jobImages=[c1,c2,c3,c4]
const Arrow=()=> <span className="text-3xl font-light text-[#858485]">›</span>
function Card({title,children,href}){return <section className="rounded-[20px] border border-[#F4F4F4] bg-white px-10 py-5"><header className="mb-6 flex justify-between"><h2 className="text-xl font-bold">{title}</h2>{href?<a href={href} aria-label={title+' 더 보기'}><Arrow/></a>:<button type="button" aria-label={title+' 더 보기'}><Arrow/></button>}</header>{children}</section>}
function Row({member,event=false,img}){return <article className="flex items-center gap-6 border-b border-[#F4F4F4] py-3 last:border-0"><img src={img} alt="" className="size-[60px] shrink-0 rounded-2xl object-cover"/><div className="flex-1">{event&&<span className="mr-1 rounded-full bg-[#F8F2ED] px-4 py-1 text-xs text-[#7D5C42]">커피챗</span>}<b className="text-sm">Spring boot 스터디</b><p className="mt-2 text-xs text-[#858485]">프로젝트 | {member}</p></div><button className="rounded-lg bg-[#7D5C42] px-5 py-2 text-sm text-white">참여하기</button></article>}
function HomeApp(){return <div className="min-h-screen bg-white text-[#171617]"><NavigationBar brand={<img className="size-full object-contain" src={logo} alt="신촌링크"/>} items={navItems}/><main className="ml-[300px] min-h-screen px-6 py-10"><div className="mx-auto flex max-w-[1157px] flex-col gap-10"><header><h1 className="text-[28px] font-bold">신촌 님, 안녕하세요 !</h1><p className="mt-4 text-lg text-[#A2A2A2]">신촌톤에서 성장 가능한 연결을 만나보세요.</p></header><div className="grid grid-cols-[506px_1fr] gap-4"><Card title="내 프로필"><div className="flex gap-6"><img src={p1} alt="" className="size-[134px] shrink-0 rounded-full object-cover"/><div><b className="text-lg">김신촌</b><span className="ml-2 rounded-full bg-[#F8F2ED] px-4 py-1 text-xs text-[#7D5C42]">홍익대학교</span><p className="mt-4 text-xs text-[#858485]">시각 디자인과 | UXUI Designer</p><p className="mt-3 text-xs">Figma | Photoshop</p></div></div></Card><Card title="참가 중인 모임">{members.slice(0,2).map((x,i)=><Row member={x} key={x} img={joinedImages[i%joinedImages.length]}/>)}</Card></div><Card title="네트워킹"><div className="grid grid-cols-3 gap-8">{members.map((x,i)=><div className="flex gap-5" key={x}><img src={rowImages[i%rowImages.length]} alt="" className="size-[60px] shrink-0 rounded-full object-cover"/><div><b>김신촌</b><p className="mt-2 text-xs text-[#858485]">시각 디자인과 | UXUI Designer</p><p className="mt-2 text-xs">Figma | Photoshop</p></div></div>)}</div></Card><Card title="추천 모임" href="/groups">{members.map((x,i)=><Row member={x} key={x} img={pImages[i%pImages.length]}/>)}</Card><Card title="네트워킹 행사">{members.map((x,i)=><Row event member={x} key={x} img={rowImages[(i+6)%rowImages.length]}/>)}</Card><Card title="추천 채용 공고"><div className="grid grid-cols-4 gap-9">{jobImages.map((img,i)=><article key={i}><img src={img} alt="" className="aspect-square rounded-2xl object-cover w-full"/><b className="mt-3 block text-sm">Backend Developer</b><p className="mt-2 text-xs text-[#858485]">스타트업 코드잇 채용</p><div className="mt-2 flex gap-2 text-xs"><span className="rounded bg-[#7D5C42] px-3 py-1 text-white">서울</span><span className="rounded bg-[#DEDEDE] px-3 py-1">경력 무관</span><span className="rounded bg-[#F4F4F4] px-3 py-1">D-5</span></div></article>)}</div></Card></div></main></div>}
function LandingPage(){
  return (
    <div className="flex min-h-screen w-full items-center bg-white text-[#171617]">
      <div className="flex-1 px-16">
        <h1 className="text-4xl font-bold leading-[1.4]">
          신촌의 사람과<br/>
          기회를 <span className="text-[#6FC2B4]">ON</span>하다
        </h1>
      </div>
      <div className="flex flex-1 flex-col items-center gap-8 px-16">
        <div className="flex items-center text-4xl font-extrabold">
          <span className="text-[#7D5C42]">신촌</span>
          <span className="relative mx-1 text-[#6FC2B4]">
            O
            <span className="absolute -top-2 left-1/2 size-2 -translate-x-1/2 rounded-full bg-[#6FC2B4]"></span>
          </span>
          <span className="text-[#6FC2B4]">N</span>
        </div>
        <button
          type="button"
          onClick={()=>{ window.location.href = '/home' }}
          className="w-64 rounded-lg bg-[#F8F2ED] py-3 text-sm font-medium text-[#7D5C42]"
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
  if(path === '/groups') return <GroupFeedPage />
  if(path === '/networking') return <NetworkingPage />
  if(path === '/home') return <HomeApp />
  return <LandingPage />
}
export default App