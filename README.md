# Ludens Homepage

<img src="https://img.shields.io/badge/nextdotjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"><img src="https://img.shields.io/badge/15.1.7-515151?style=for-the-badge">&nbsp;&nbsp;
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/19.0.0-515151?style=for-the-badge">

<br>

## 🛠️ How to start

1. **Prerequisites**
- Node.js@22.12.0.

2. **Run npm install**
   ```sh
   npm install
   ```

3. **Run npm run dev**
   ```sh
   npm run dev
   ```

<br>

## 📦 Libraries
| Library | Version | Description |
|:-----:|:-----:|:-----:|
| **@svgr/webpack** | 8.1.0 | SVG 파일 사용 시 필요 |
| **embla-carousel-react** | 8.5.2 | carousel UI 적용하는데 사용 |
| **framer-motion** | 12.4.5 | animation 적용하는데 사용 |
| **tailwind-scrollbar-hide** | 2.0.0 | 일부 tab 에서 가로 scrollbar 숨기는 용도로 사용 |
| **tailwindcss** | 3.4.17 |  |

<br>

## 📂 Project Structure

[**Bulletproof Filestructure**](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)를 따릅니다.

```
src
|
+-- app               # application layer containing:
|   |                 
|   +-- pages         # application pages
|   +-- layout.tsx    # main application component
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # global configurations, exported env variables etc.
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # reusable libraries preconfigured for the application
|
+-- stores            # global state stores
|
+-- testing           # test utilities and mocks
|
+-- types             # shared types used across the application
|
+-- utils             # shared utility functions
```

<br>

## 📝 Commit Convention

소문자로 작성해주세요.

| 태그 | 사용하는 경우 |
| :--: | :--: |
| fix: | 버그, 오류 해결 |
| feat: | 새로운 기능 |
| add: | feat 이외의 부수적인 코드/라이브러리/에셋 추가 |
| remove: | 파일 삭제 |
| refactor: | 내부 로직은 변경 하지 않고 기존의 코드 개선하는 리팩토링 |
| style: | 코드의 의미 변경 없이 코드 포맷팅, 세미콜론 줄바꿈 등 |
| design: | UI 변경 |
| chore: | 빌드 수정, 패키지 매니저 설정 등 기타 |
| docs: | 문서 개정 |
