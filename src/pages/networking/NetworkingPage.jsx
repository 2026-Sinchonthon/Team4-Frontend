import { useEffect, useRef, useState, useCallback } from 'react'
import { NavigationBar } from '../../shared/ui/index.js'
import logo from '../../assets/navigation/logo.svg'
import homeIcon from '../../assets/navigation/home.svg'
import groupFeedIcon from '../../assets/navigation/group-feed.svg'
import networkingIcon from '../../assets/navigation/networking.svg'
import mypageIcon from '../../assets/navigation/mypage.svg'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'

const navItems=[{label:'홈',href:'/',icon:<img src={homeIcon} alt=""/>},{label:'모임 피드',href:'/groups',icon:<img src={groupFeedIcon} alt=""/>},{label:'네트워킹',href:'/networking',icon:<img src={networkingIcon} alt=""/>,isActive:true},{label:'마이 페이지',href:'/mypage',icon:<img src={mypageIcon} alt=""/>}]

const pImages=[p1,p2,p3,p4]

function makeProfiles(start,count){
  return Array.from({length:count},(_,i)=>{
    const idx=start+i
    return {
      id:idx,
      img:pImages[idx%pImages.length],
      name:'김신촌',
      school:'홍익대학교',
      major:'시각 디자인과 | UXUI Designer',
      skills:'Figma | Photoshop',
      note:'같이 디자인 작업해요.. 주로 UXUI 디자인 합니다.'
    }
  })
}

function ProfileCard({profile,contacted,onToggle}){
  return (
    <div className="rounded-2xl border border-[#F4F4F4] bg-white p-6 text-center">
      <img src={profile.img} alt="" className="mx-auto size-[100px] rounded-full object-cover"/>
      <p className="mt-4 inline-block rounded-full bg-[#7D5C42] px-3 py-1 text-xs text-white">{profile.note}</p>
      <div className="mt-3 flex items-center justify-center gap-2">
        <b className="text-base">{profile.name}</b>
        <span className="rounded-full bg-[#F8F2ED] px-3 py-1 text-xs text-[#7D5C42]">{profile.school}</span>
      </div>
      <p className="mt-2 text-xs text-[#858485]">{profile.major}</p>
      <p className="mt-1 text-xs text-[#858485]">{profile.skills}</p>
      <button
        type="button"
        onClick={()=>onToggle(profile.id)}
        className={`mt-4 w-full rounded-lg px-5 py-2 text-sm font-semibold ${contacted ? 'bg-[#7D5C42] text-white' : 'bg-[#DBBEA6] text-[#5B4530]'}`}
      >
        연락하기
      </button>
    </div>
  )
}

export function NetworkingPage(){
  const [profiles,setProfiles]=useState(()=>makeProfiles(0,9))
  const [contactedIds,setContactedIds]=useState(()=>new Set())
  const sentinelRef=useRef(null)

  const loadMore=useCallback(()=>{
    setProfiles(prev=>[...prev,...makeProfiles(prev.length,6)])
  },[])

  useEffect(()=>{
    const el=sentinelRef.current
    if(!el) return
    const observer=new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting) loadMore()
    },{rootMargin:'200px'})
    observer.observe(el)
    return ()=>observer.disconnect()
  },[loadMore])

  const toggleContact=(id)=>{
    setContactedIds(prev=>{
      const next=new Set(prev)
      if(next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-white text-[#171617]">
      <NavigationBar brand={<img className="size-full object-contain" src={logo} alt="신촌링크"/>} items={navItems}/>
      <main className="ml-[300px] min-h-screen px-6 py-10">
        <div className="mx-auto max-w-[1157px]">
          <input
            type="text"
            placeholder="이름, 학교, 전공, 관심 직무 등 프로필을 검색해보세요"
            className="mb-8 w-full rounded-2xl border border-[#F4F4F4] px-6 py-4 text-sm"
          />
          <div className="grid grid-cols-3 gap-6">
            {profiles.map(p=>(
              <ProfileCard
                key={p.id}
                profile={p}
                contacted={contactedIds.has(p.id)}
                onToggle={toggleContact}
              />
            ))}
          </div>
          <div ref={sentinelRef} className="h-10"/>
        </div>
      </main>
    </div>
  )
}