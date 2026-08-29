import { useEffect, useState } from 'react'
import { Button, NavigationBar } from '../shared/ui/index.js'
import { groupsApi } from '../shared/api/groups.js'
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
 const groupId = window.location.pathname.split('/')[2]
 const [categories,setCategories]=useState([])
 const [group,setGroup]=useState(null)
 const [error,setError]=useState('')
 useEffect(()=>{
   groupsApi.categories().then(setCategories).catch((requestError)=>setError(requestError.message))
   if(!isCreate) groupsApi.get(groupId).then(setGroup).catch((requestError)=>setError(requestError.message))
 },[groupId,isCreate])
 const handleSubmit=async(event)=>{
   event.preventDefault()
   const form=Object.fromEntries(new FormData(event.currentTarget))
   const payload={...form,categoryId:Number(form.categoryId),maxMembers:Number(form.maxMembers),meetingAt:form.meetingAt?`${form.meetingAt}T00:00:00`:null,applicationDeadline:form.applicationDeadline?`${form.applicationDeadline}T23:59:59`:null}
   Object.keys(payload).forEach((key)=>{if(payload[key]===''||payload[key]===null)delete payload[key]})
   try{
     if(isCreate) await groupsApi.create(payload)
     else await groupsApi.update(groupId,payload)
     window.location.href=isCreate?'/groups':`/groups/${groupId}`
   }catch(requestError){setError(requestError.message)}
 }
 if(!isCreate&&!group&&!error)return <p className="p-10 text-center">모임 정보를 불러오는 중...</p>
 return <div className="min-h-screen bg-white font-['Pretendard','Apple_SD_Gothic_Neo',sans-serif] text-[#171617]"><NavigationBar brand={<img className="size-full object-contain" src={logo} alt="신촌링크"/>} items={navItems}/><main className="ml-[300px] min-h-screen px-6 py-10"><form className="mx-auto max-w-[900px]" onSubmit={handleSubmit}><header className="mb-10"><h1 className="text-[28px] font-semibold">{isCreate?'새 모임 만들기':'모집 내용 수정'}</h1><p className="mt-3 text-base text-[#858485]">모임 정보를 입력한 뒤 저장해주세요.</p></header>{error&&<p className="mb-5 text-red-600" role="alert">{error}</p>}<div className="grid grid-cols-2 gap-6"><label className={labelClass}>모임 제목<input className={fieldClass} name="title" defaultValue={group?.title??''} required/></label><label className={labelClass}>카테고리<select className={fieldClass} name="categoryId" defaultValue="" required><option value="" disabled>카테고리 선택</option>{categories.map((category)=><option value={category.id} key={category.id}>{category.name}</option>)}</select></label><label className={labelClass}>장소<input className={fieldClass} name="location" defaultValue={group?.location??''}/></label><label className={labelClass}>모임일<input className={fieldClass} name="meetingAt" type="date" defaultValue={group?.meetingAt?.slice(0,10)??''}/></label><label className={labelClass}>신청 마감일<input className={fieldClass} name="applicationDeadline" type="date" defaultValue={group?.applicationDeadline?.slice(0,10)??''}/></label><label className={labelClass}>최대 인원<input className={fieldClass} name="maxMembers" type="number" min="2" defaultValue={group?.maxMembers??''} required/></label><label className={labelClass}>오픈채팅 URL<input className={fieldClass} name="openChatUrl" type="url" defaultValue={group?.openChatUrl??''}/></label></div><label className={`mt-6 block ${labelClass}`}>모임 설명<textarea className="mt-2 min-h-[320px] w-full resize-y rounded-lg border border-[#DEDEDE] p-4" name="description" defaultValue={group?.description??''} required/></label><div className="mt-8 grid grid-cols-2 gap-5"><a className="flex min-h-12 items-center justify-center rounded-lg bg-[#F8F2ED] text-lg font-semibold text-[#7D5C42]" href={isCreate?'/groups':`/groups/${groupId}`}>취소</a><Button size="lg" type="submit" fullWidth>{isCreate?'모임 생성':'수정 내용 저장'}</Button></div></form></main></div>
}
