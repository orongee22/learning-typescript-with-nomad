# learning-typescript-with-nomad
빠르게 훑고 가는 typescript 공뷰 ✏


### typescript 설치
```cmd
yarn add global typescript
```

### config

자바스크립트 컴파일 옵션 값 추가
```
// tsconfig.json
{
    "compilerOptions" : {
        "module" : "commonjs", // 모듈 import, export 가능
        "target" : "ES6", // 타겟이 되는 js 버전
        "sourceMap" : true 
    },
    "include": ["index.ts"], // 컴파일 대상이 되는 파일 설정
    "exclude": ["node_modules"] // 컴파일 제외 대상 (폴더는 없지만 현재 디폴트로 설정)
}
```

### 실행

터미널에서 `tsc` 실행하면 ts를 js로 자동 컴파일 해줌
컴파일 후 node 서버를 통해 실행 결과를 터미널에서 확인하기 위해 
`package.json`에 스크립트 추가

```json
"scripts" : {
    "start" : "node index.js",
    "prestart" : "tsc"
}
```

`prestart`란 `yarn start` 가 실행되기 전 먼저 실행되는 명령어. 타입스크립트를 먼저 컴파일 한 후 node index.js를 실행하여 파일 내 결과를 띄워줌

### 라이브러리 추가

```
yarn add tsc-watch --dev
npm i -D @types/node typescript ts-node // 에러 났을 경우 같이 설치
```
컴파일이 필요할 때마다 계속 명령어를 치지 않고도 변화를 감지하여 알아서 컴파일 실행 시켜주는 라이브러리 추가

```
// package.json
"scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\" "
}
```
`\" node dist/index.js\"` 는 dist 폴더 안 index.js 파일을 node로 실행한다는 뜻

```
// tsconfig.json
"compilerOptions" : {
        "module" : "commonjs",
        "target" : "ES6",
        "sourceMap" : true,
        "outDir": "dist"
    },
"include": ["src/**/*"],
"exclude": ["node_modules"]
```
`include`는 src/ 안에 있는 모든 것을 컴파일 하도록 하고,
컴파일 옵션에서 `outDir`를 dist로 변경해서 컴파일 된 대상이 dist 에 저장되게 지정함.
`gitignore`파일에 `dist`폴더까지 추가하기


