# 신촌톤 프론트엔드 구조

이 프로젝트는 JavaScript React와 Tailwind CSS를 사용합니다. React 컴포넌트는 `.jsx` 파일로 작성합니다.

```text
src/
├─ app/                         # 앱 초기화, 라우팅, 전역 스타일
├─ pages/                       # URL 단위 화면 조립
│  ├─ home/                     # /
│  ├─ groups/                   # /groups
│  ├─ group-detail/             # /groups/:id
│  ├─ mypage/                   # /mypage
│  ├─ recruit/                  # /recruit
│  └─ profile/                  # /profile/:id
├─ widgets/                     # 여러 페이지에서 조합하는 큰 UI 블록
├─ features/                    # 사용자 행동 단위 기능
├─ entities/                    # 도메인별 데이터·표시 컴포넌트
├─ shared/
│  ├─ api/
│  ├─ assets/
│  ├─ config/
│  ├─ constants/
│  ├─ lib/
│  └─ ui/                       # 재사용 공통 컴포넌트
└─ mocks/                       # 개발용 목업 데이터
```

## 파일 규칙

- 페이지 컴포넌트는 `Page.jsx`처럼 작성합니다.
- 도메인 로직은 `model.js`, `api.js`처럼 작성합니다.
- 스타일은 Tailwind 유틸리티 클래스를 `className`에 사용합니다.
- `shared/ui`에는 Button, Input, Badge, Avatar, Card, NavigationBar처럼 범용 UI만 둡니다.
