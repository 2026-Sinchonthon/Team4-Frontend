import { Button, NavigationBar } from '../shared/ui/index.js'
import logo from '../assets/auth-logo.svg'
import homeIcon from '../assets/navigation/home.svg'
import groupFeedIcon from '../assets/navigation/group-feed.svg'
import networkingIcon from '../assets/navigation/networking.svg'
import mypageIcon from '../assets/navigation/mypage.svg'

const navItems=[
 {label:'홈',href:'/',icon:<img src={homeIcon} alt=""/>},
 {label:'모임 피드',href:'/groups',icon:<img src={groupFeedIcon} alt=""/>,isActive:true},
 {label:'네트워킹',href:'/networking',icon:<img src={networkingIcon} alt=""/>},
 {label:'마이 페이지',href:'/mypage',icon:<img src={mypageIcon} alt=""/>},
]
const fieldClass="mt-2 h-12 w-full rounded-lg border border-[#DEDEDE] px-4 text-base outline-none focus:border-[#7D5C42] focus:ring-2 focus:ring-[#E9D8CA]"
const labelClass="text-base font-semibold"

export function GroupEditPage({ mode = 'edit' }){
 const isCreate = mode === 'create'
 const handleSubmit=(event)=>{event.preventDefault(); window.location.href=isCreate?'/groups':'/groups/1?owner=true'}
 return <div className="min-h-screen bg-white font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif] text-[#171617]"><NavigationBar brand={<img className="size-full object-contain" src={logo} alt="신촌링크"/>} items={navItems}/><main className="ml-[300px] min-h-screen px-6 py-10"><form className="mx-auto max-w-[900px]" onSubmit={handleSubmit}><header className="mb-10"><h1 className="text-[28px] font-semibold">{isCreate ? '새 모임 만들기' : '모집 내용 수정'}</h1><p className="mt-3 text-base text-[#858485]">{isCreate ? '새로운 모임의 정보를 입력해주세요.' : '모임 정보를 수정한 뒤 저장해주세요.'}</p></header><div className="grid grid-cols-2 gap-6"><label className={labelClass}>모임 제목<input className={fieldClass} name="title" defaultValue={isCreate ? '' : 'Spring Boot 스터디'} required/></label><label className={labelClass}>카테고리<select className={fieldClass} name="category" defaultValue={isCreate ? '' : 'study'}><option value="" disabled>카테고리 선택</option><option value="study">스터디</option><option value="project">프로젝트</option><option value="job">취업</option><option value="startup">창업</option><option value="coffee-chat">커피챗</option><option value="networking">네트워킹</option><option value="etc">기타</option></select></label><label className={labelClass}>장소<input className={fieldClass} name="location" defaultValue={isCreate ? '' : '신촌 카페'}/></label><label className={labelClass}>시작일<input className={fieldClass} name="meetingAt" type="date" defaultValue={isCreate ? '' : '2026-08-01'}/></label><label className={labelClass}>최대 인원<input className={fieldClass} name="maxMembers" type="number" min="2" defaultValue={isCreate ? '' : '6'}/></label><label className={labelClass}>오픈채팅 URL<input className={fieldClass} name="openChatUrl" type="url" defaultValue={isCreate ? '' : 'https://open.kakao.com/'}/></label></div><label className={`mt-6 block ${labelClass}`}>모임 설명<textarea className="mt-2 min-h-[320px] w-full resize-y rounded-lg border border-[#DEDEDE] p-4 text-base leading-[1.5] outline-none focus:border-[#7D5C42] focus:ring-2 focus:ring-[#E9D8CA]" name="description" defaultValue={isCreate ? '' : '스프링 부트의 핵심 동작 원리를 학습하고 실무 프로젝트를 완성하는 스터디입니다.'}/></label><div className="mt-8 grid grid-cols-2 gap-5"><a className="flex min-h-12 items-center justify-center rounded-lg bg-[#F8F2ED] px-6 text-lg font-semibold text-[#7D5C42]" href={isCreate ? '/groups' : '/groups/1?owner=true'}>취소</a><Button size="lg" type="submit" fullWidth>{isCreate ? '모임 생성' : '수정 내용 저장'}</Button></div></form></main></div>
}
