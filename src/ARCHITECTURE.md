# 신촌톤 프론트엔드 구조

```text
src/
├─ app/                         # 앱 초기화, 라우팅, 전역 스타일
│  ├─ providers/                # Query/Auth 등 전역 Provider
│  ├─ routes/                   # /, /groups, /groups/:id 등 라우트 정의
│  └─ styles/                   # 토큰·전역 스타일
├─ pages/                       # URL 단위 화면 조립
│  ├─ home/                     # / — 프로필 요약 및 추천 섹션
│  ├─ groups/                   # /groups — 모임 피드
│  ├─ group-detail/             # /groups/:id — 모임 상세
│  ├─ mypage/                   # /mypage — 내 정보·활동·포트폴리오
│  ├─ recruit/                  # /recruit — 구인 프로필 검색·필터
│  └─ profile/                  # /profile/:id — 프로필 상세
├─ widgets/                     # 여러 페이지에서 조합하는 큰 UI 블록
│  ├─ header/
│  ├─ navigation/
│  └─ home-sections/            # 추천 공고·모임·커피챗·행사 섹션
├─ features/                    # 사용자 행동 단위 기능
│  ├─ group/
│  │  ├─ create-group/
│  │  ├─ join-group/
│  │  ├─ cancel-participation/
│  │  ├─ open-chat/             # 카카오 오픈채팅 연동 진입
│  │  └─ filter-groups/
│  ├─ recruit/
│  │  ├─ search-profiles/
│  │  └─ filter-profiles/
│  ├─ profile/
│  │  └─ edit-profile/
│  └─ recommendation/
├─ entities/                    # 도메인 모델·표시 컴포넌트·API
│  ├─ group/
│  ├─ profile/
│  ├─ job-posting/
│  ├─ event/
│  ├─ coffee-chat/
│  └─ project/
├─ shared/                      # 도메인에 독립적인 재사용 코드
│  ├─ api/
│  ├─ assets/{icons,images}/
│  ├─ config/
│  ├─ constants/
│  ├─ lib/
│  ├─ types/
│  └─ ui/
└─ mocks/                       # 개발용 목업 데이터·핸들러
```

## 각 폴더의 파일 규칙

- `pages/*`: `Page.tsx`, `styles.module.css`처럼 화면 조립에만 집중합니다.
- `entities/*`: `model.ts`, `api.ts`, `ui/`를 두어 타입·데이터 요청·도메인 UI를 함께 관리합니다.
- `features/*`: `ui/`, `model/`, `api/`를 필요할 때만 추가합니다.
- `shared/ui`: Button, Input, Chip, Modal, EmptyState처럼 범용 컴포넌트만 둡니다.

카카오 오픈채팅은 외부 서비스이므로 `features/group/open-chat`에서 URL 발급/검증 API를 호출한 뒤 새 창 또는 딥링크로 연결합니다. 카카오 계정이나 대화 내용을 프론트엔드에서 직접 다루지 않습니다.
