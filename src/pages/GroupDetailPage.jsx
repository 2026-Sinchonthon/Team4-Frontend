import { useState } from 'react'
import { Badge, Button, NavigationBar } from '../shared/ui/index.js'
import logo from '../assets/navigation/logo.svg'
import homeIcon from '../assets/navigation/home.svg'
import groupFeedIcon from '../assets/navigation/group-feed.svg'
import networkingIcon from '../assets/navigation/networking.svg'
import mypageIcon from '../assets/navigation/mypage.svg'
import backIcon from '../assets/detailbutton.svg'
import hero from '../assets/group-detail-hero.png'
import member1 from '../assets/member-1.png'
import member2 from '../assets/member-2.png'
import member3 from '../assets/member-3.png'
import crown from '../assets/crown.svg'
import location from '../assets/location.svg'
import calendar from '../assets/calendar.svg'
import groupMax from '../assets/group-max.svg'
import groupCurrent from '../assets/group-current.svg'

const navItems=[
  {label:'홈',href:'/',icon:<img src={homeIcon} alt=""/>},
  {label:'모임 피드',href:'/groups',icon:<img src={groupFeedIcon} alt=""/>,isActive:true},
  {label:'네트워킹',href:'/networking',icon:<img src={networkingIcon} alt=""/>},
  {label:'마이 페이지',href:'/mypage',icon:<img src={mypageIcon} alt=""/>},
]
const members=[member1,member2,member3]
const info=[{icon:location,label:'신촌 카페'},{icon:calendar,label:'26.08~'},{icon:groupMax,label:'최대 6인'},{icon:groupCurrent,label:'현재 3인 모집',accent:true}]

function Member({image,index}){return <article className="flex min-w-0 flex-1 items-center gap-6 border-r border-[#F4F4F4] pr-5 last:border-0"><img className="size-20 rounded-full object-cover" src={image} alt="김신촌 프로필"/><div><div className="flex items-center gap-2">{index===0&&<img className="size-6" src={crown} alt="모임장"/>}<strong className="text-lg">김신촌</strong><span className="rounded-full bg-[#F8F2ED] px-4 py-1 text-sm text-[#7D5C42]">홍익대학교</span></div><p className="mt-3 text-sm text-[#858485]">시각 디자인과 | UXUI Designer</p><p className="mt-2 text-sm text-[#545454]">Figma | Photoshop</p></div></article>}

export function GroupDetailPage(){
 const [isJoined, setIsJoined] = useState(false)
 const isOwner = new URLSearchParams(window.location.search).get('owner') === 'true'
 return <div className="min-h-screen bg-white font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif] text-[#171617]"><NavigationBar brand={<img className="size-full object-contain" src={logo} alt="신촌링크"/>} items={navItems}/><main className="ml-[300px] min-h-screen pb-14"><section className="relative flex h-[408px] items-center justify-center bg-[#858485]"><img className="h-full w-[342px] object-cover" src={hero} alt="Spring Boot 스터디"/><a className="absolute left-10 top-6 flex size-8 items-center justify-center" href="/groups" aria-label="모임 목록으로 돌아가기"><img className="size-6 rotate-180 brightness-0 invert" src={backIcon} alt=""/></a></section><div className="mx-auto flex max-w-[1151px] flex-col gap-10 px-7 py-10"><section className="border-b border-[#F4F4F4] pb-10"><Badge tone="solid" size="lg">참가자 모집 중</Badge><h1 className="mt-5 text-[28px] font-semibold leading-[1.2] tracking-[-0.56px]">Spring Boot 스터디</h1><p className="mt-4 text-[22px] font-bold text-[#858485]">스터디 | 연세대 외 2명</p><div className="mt-8 grid grid-cols-2 gap-5">{isOwner ? <Button size="lg" fullWidth disabled className="text-xl">모집 마감하기</Button> : <Button size="lg" fullWidth variant={isJoined ? 'muted' : 'primary'} className="text-xl" aria-pressed={isJoined} onClick={() => setIsJoined((joined) => !joined)}>{isJoined ? '참가 취소' : '참여 신청'}</Button>}<Button size="lg" fullWidth variant="ghost" className="bg-[#F8F2ED] text-[#7D5C42] hover:bg-[#F1E5DB]">오픈채팅</Button></div>{isOwner && <a className="mt-4 flex min-h-12 w-full items-center justify-center rounded-lg border border-[#7D5C42] text-xl font-semibold text-[#7D5C42]" href="/groups/1/edit">모집 내용 수정</a>}</section><section className="rounded-[20px] border border-white/60 bg-white/75 px-10 py-5 shadow-[0_15px_40px_rgba(203,203,203,0.08)]"><h2 className="text-xl font-semibold">참여자 프로필</h2><div className="mt-7 flex gap-7">{members.map((image,index)=><Member image={image} index={index} key={image}/>)}</div></section><section className="rounded-[20px] border border-white/60 bg-white/75 px-10 py-5 shadow-[0_15px_40px_rgba(203,203,203,0.08)]"><h2 className="text-xl font-semibold">모임 정보</h2><div className="mt-7 flex gap-5">{info.map(item=><div className="flex h-[122px] w-[158px] flex-col items-center gap-6 px-2 py-3" key={item.label}><img className="size-8" src={item.icon} alt=""/><strong className={`text-center text-lg ${item.accent?'text-[#7D5C42]':''}`}>{item.label}</strong></div>)}</div></section><section className="min-h-[718px] rounded-[20px] border border-white/60 bg-white/75 px-10 py-5 shadow-[0_15px_40px_rgba(203,203,203,0.08)]"><h2 className="text-xl font-semibold">모임 설명</h2><div className="mt-7 space-y-5 text-base leading-[1.5] text-[#545454]"><p>스프링 부트(Spring Boot) 스터디 n기 모집합니다!</p><div><p>1. 스터디 소개 및 목표</p><ul className="ml-6 list-disc"><li>목표: 스프링 부트의 핵심 동작 원리를 학습하고 실무 프로젝트/토이 프로젝트를 완성합니다.</li><li>대상: 신촌권 대학생 누구나</li><li className="ml-6">Java 기본 문법을 숙지하신 분</li><li className="ml-6">스프링 부트로 백엔드 개발을 제대로 시작하고 싶은 분</li></ul></div><div><p>2. 커리큘럼 & 학습 교재</p><ul className="ml-6 list-disc"><li>Spring Core (IoC/DI, Bean 라이프사이클)</li><li>Spring MVC 및 REST API 설계</li><li>Spring Data JPA & DB 연동</li><li>Spring Security 및 JWT 인증/인가</li><li>테스트 코드 작성 및 배포 실습</li></ul></div><div><p>3. 진행 방식</p><ul className="ml-6 list-disc"><li>일정: 매주 [요일] [시간] (주 1회, 약 2시간 진행)</li><li>장소: 신촌</li></ul></div><div><p>4. 스터디 규칙</p><ul className="ml-6 list-disc"><li>모집 인원: [n]명</li><li>예치금: [n]만 원</li><li>패널티 적용</li></ul></div></div></section></div></main></div>
}
