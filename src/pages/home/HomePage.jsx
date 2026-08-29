// src/pages/home/HomePage.jsx
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import s1 from '../../assets/s1.jpg'
import s2 from '../../assets/s2.jpg'
import s3 from '../../assets/s3.jpg'
import s4 from '../../assets/s4.jpg'
import s5 from '../../assets/s5.jpg'

export function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* p1~p4는 한 번씩 사용하는 이미지 */}
      <img src={p1} alt="" className="w-full h-auto" />

      {/* s1~s5는 여러 군데서 중복 사용 */}
      <img src={s1} alt="" className="w-full h-auto" />
      {/* 필요한 곳에서 s1을 또 써도 됨, 같은 변수 재사용 */}
      <img src={s1} alt="" className="w-24 h-24 object-cover" />
    </main>
  )
}