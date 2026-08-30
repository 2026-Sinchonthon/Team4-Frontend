import { useEffect, useRef, useState, useCallback } from 'react'
import { NavigationBar } from '../../shared/ui/index.js'
import logo from '../../assets/auth-logo.svg'
import homeIcon from '../../assets/navigation/home.svg'
import groupFeedIcon from '../../assets/navigation/group-feed.svg'
import networkingIcon from '../../assets/navigation/networking.svg'
import mypageIcon from '../../assets/navigation/mypage.svg'
import searchIcon from '../../assets/search.svg'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import s1 from '../../assets/s1.jpg'
import s2 from '../../assets/s2.jpg'
import s3 from '../../assets/s3.jpg'
import s4 from '../../assets/s4.jpg'
import s5 from '../../assets/s5.jpg'
import pp1 from '../../assets/pp1.jpg'

const navItems=[{label:'홈',href:'/home',icon:<img src={homeIcon} alt=""/>},{label:'모임 피드',href:'/groups',icon:<img src={groupFeedIcon} alt=""/>},{label:'네트워킹',href:'/networking',icon:<img src={networkingIcon} alt=""/>,isActive:true},{label:'마이 페이지',href:'/mypage',icon:<img src={mypageIcon} alt=""/>}]

const pImages=[p1,p2,p3,p4]
const sImages=[s1,s2,s3,s4,s5]

function makeProfiles(start,count){
  return Array.from({length:count},(_,i)=>{
    const idx=start+i
    return {
      id:idx,
      img:pImages[idx%pImages.length],
      banner:sImages[idx%sImages.length],
      name:'김신촌',
      school:'홍익대학교',
      major:'시각 디자인과 | UXUI Designer',
      skills:['Figma','Photoshop'],
      note:'같이 디자인 작업해요.. 주로 UXUI 디자인 합니다.',
      hasDetail: idx % 3 === 0
    }
  })
}

function SearchBar(){
  return (
    <div className="mb-8 flex items-center gap-3 rounded-2xl bg-[#F4F4F4] px-6 py-4">
      <img src={searchIcon} alt="" className="size-5 opacity-60"/>
      <input
        type="text"
        placeholder="이름, 학교, 전공, 관심 직무 등 프로필을 검색해보세요."
        className="w-full bg-transparent text-sm text-[#171617] placeholder:text-[#A2A2A2] focus:outline-none"
      />
    </div>
  )
}

function ProfileCard({profile,contacted,onContact}){
  return (
    <div className="rounded-2xl border border-[#F4F4F4] bg-white p-6 text-center">
      <img src={profile.img} alt="" className="mx-auto size-[100px] rounded-full object-cover"/>
      <p className="mt-4 inline-block rounded-full bg-[#7D5C42] px-3 py-1 text-xs text-white">{profile.note}</p>
      <div className="mt-3 flex items-center justify-center gap-2">
        <b className="text-base">{profile.name}</b>
        <span className="rounded-full bg-[#F8F2ED] px-3 py-1 text-xs text-[#7D5C42]">{profile.school}</span>
      </div>
      <p className="mt-2 text-xs text-[#858485]">{profile.major}</p>
      <p className="mt-1 text-xs text-[#858485]">{profile.skills.join(' | ')}</p>
      <button
        type="button"
        onClick={()=>onContact(profile)}
        className={`mt-4 w-full rounded-lg px-5 py-2 text-sm font-semibold ${contacted ? 'bg-[#7D5C42] text-white' : 'bg-[#DBBEA6] text-[#5B4530]'}`}
      >
        연락하기
      </button>
    </div>
  )
}

function ProfileDetail({profile,onBack}){
  return (
    <div className="mx-auto max-w-[600px]">
      <button type="button" onClick={onBack} className="mb-4 text-2xl text-[#858485]" aria-label="뒤로 가기">‹</button>
      <div className="overflow-hidden rounded-2xl border border-[#F4F4F4] bg-white">
        <div className="relative h-[180px] w-full">
          <img src={profile.banner} alt="" className="h-full w-full object-cover"/>
          <img src={profile.img} alt="" className="absolute -bottom-10 left-6 size-[84px] rounded-full border-4 border-white object-cover"/>
        </div>
        <div className="px-6 pb-8 pt-12">
          <div className="mb-3 flex gap-3 text-xs text-[#858485]">
            <span>GitHub</span><span>LinkedIn</span>
          </div>
          <div className="flex items-center gap-2">
            <b className="text-lg">{profile.name}</b>
            <span className="rounded-full bg-[#F8F2ED] px-3 py-1 text-xs text-[#7D5C42]">{profile.school} 3학년</span>
          </div>
          <p className="mt-1 text-sm text-[#858485]">{profile.major}</p>
          <div className="mt-2 flex gap-2">
            {profile.skills.map(s=><span key={s} className="rounded bg-[#F4F4F4] px-3 py-1 text-xs">{s}</span>)}
          </div>
          <button type="button" className="mt-5 w-full rounded-lg bg-[#DBBEA6] px-5 py-3 text-sm font-semibold text-[#5B4530]">연락하기</button>
          <section className="mt-8">
            <h3 className="mb-2 text-sm font-bold">한줄 소개</h3>
            <p className="text-sm text-[#858485]">{profile.note}</p>
          </section>
          <section className="mt-6">
            <h3 className="mb-2 text-sm font-bold">자기 소개</h3>
            <p className="text-sm leading-relaxed text-[#858485]">보기 좋은 화면을 넘어, '왜 이 디자인이어야 하는가'에 대한 근거를 찾는 과정을 중요하게 생각합니다. 데이터와 정성적 사용자 피드백 속에서 진짜 문제를 발견하고, 복잡한 비즈니스 요구사항을 단순하고 직관적인 사용자 경험으로 풀어냅니다.</p>
          </section>
          <section className="mt-6">
            <h3 className="mb-2 text-sm font-bold">활동 이력</h3>
            <ul className="list-disc pl-4 text-sm text-[#858485]">
              <li>멋쟁이 사자처럼 14기 디자인</li>
            </ul>
          </section>
          <section className="mt-6">
            <h3 className="mb-2 text-sm font-bold">포트폴리오</h3>
            <img src={pp1} alt="포트폴리오" className="w-full rounded-xl object-cover"/>
          </section>
        </div>
      </div>
    </div>
  )
}

export function NetworkingPage(){
  const [profiles,setProfiles]=useState(()=>makeProfiles(0,9))
  const [contactedIds,setContactedIds]=useState(()=>new Set())
  const [selectedProfile,setSelectedProfile]=useState(null)
  const sentinelRef=useRef(null)

  const loadMore=useCallback(()=>{
    setProfiles(prev=>[...prev,...makeProfiles(prev.length,6)])
  },[])

  useEffect(()=>{
    const el=sentinelRef.current
    if(!el || selectedProfile) return
    const observer=new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting) loadMore()
    },{rootMargin:'200px'})
    observer.observe(el)
    return ()=>observer.disconnect()
  },[loadMore,selectedProfile])

  const handleContact=(profile)=>{
    if(profile.hasDetail){
      setSelectedProfile(profile)
      return
    }
    setContactedIds(prev=>{
      const next=new Set(prev)
      if(next.has(profile.id)) next.delete(profile.id); else next.add(profile.id)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-white text-[#171617]">
      <NavigationBar brand={<img className="size-full object-contain" src={logo} alt="신촌링크"/>} items={navItems}/>
      <main className="ml-[300px] min-h-screen px-6 py-10">
        <div className="mx-auto max-w-[1157px]">
          {selectedProfile ? (
            <ProfileDetail profile={selectedProfile} onBack={()=>setSelectedProfile(null)}/>
          ) : (
            <>
              <SearchBar/>
              <div className="grid grid-cols-3 gap-6">
                {profiles.map(p=>(
                  <ProfileCard
                    key={p.id}
                    profile={p}
                    contacted={contactedIds.has(p.id)}
                    onContact={handleContact}
                  />
                ))}
              </div>
              <div ref={sentinelRef} className="h-10"/>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
