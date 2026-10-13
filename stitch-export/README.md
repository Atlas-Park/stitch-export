# Seoyun Portfolio

Stitch 디자인을 기반으로 제작된 정적 개인 프로필 웹사이트입니다. 프론트엔드는 순수 HTML, CSS, JavaScript로 구성되어 있으며 로컬 서버에도 외부 패키지를 사용하지 않습니다.

## 로컬 실행

Node.js 18 이상에서 다음 명령어를 실행합니다.

```bash
npm start
```

브라우저에서 <http://127.0.0.1:3000>을 열면 됩니다. 다른 포트를 사용하려면 다음과 같이 실행할 수 있습니다.

```bash
PORT=4173 npm start
```

`npm install`은 필요하지 않습니다.

## 주요 파일

```text
stitch-export/
├── index.html       # Vercel 및 로컬 서버의 시작 페이지
├── styles.css       # 전체 스타일과 반응형 레이아웃
├── script.js        # 메뉴, 섹션 표시, 이메일 복사 기능
├── server.js        # Node.js 내장 모듈 기반 로컬 정적 서버
├── package.json     # npm 실행 명령과 Node.js 버전 정보
├── DESIGN.md        # Stitch 디자인 명세
├── code.html        # Stitch 원본 HTML 참고 파일
└── screen.png       # Stitch 원본 화면 참고 이미지
```

## Vercel 배포

저장소를 Vercel에 연결하고 프로젝트 루트를 이 폴더로 지정하면 됩니다. 빌드 명령과 출력 디렉터리는 비워 두면 루트의 `index.html`이 정적 사이트로 배포됩니다.
