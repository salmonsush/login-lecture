# login-lecture
백엔드 맛보기 강의

서버를 실행시키는 방법 : www.js를 실행해주는 원리. 그런데, package.json에서 명령어를 설정하였기에, nodemon start라고 명령어를 login-lecture/app 위치에서 쳐주면 실행된다.

<code>
Repository
└───app
│   └───bin
│   |   └───www.js // 서버를 띄워주는 코드 app을 require로 불러온다.
│   |     
│   └───src
│   |   └───public
│   |   |   └───js
│   |   |       └───home
│   |   |           └───login.js // 맨 마지막에 만든 문서이다. html과 연계되서 동작하는 파일. login.ejs와 연계된다. <script src="/js/home/login.js" defer> 라는 이름으로 불리기 위해 app.js에 미들웨어를 추가로 등록해준다. 로그인 창에서 써진 값들을 제어하기 위한 모듈이다. 
│   |   |       
│   |   └───routes // 클라이언트로부터 서버로 http 요청이 오면, 요청에 알맞는 문서로 라우팅 해주는 것.
│   |   |   └───home
│   |   |       └───index.js   // 라우터이다.
│   |   |       └───home.ctrl.js // 컨트롤러의 기능부(Controller)만을 모아놓았다. 라우터에서 이 기능을 뽑아다가 쓴다.
│   |   |       
│   |   └───views // html문서를 분리해주었다.
│   |   |   └───home
│   |   |       └───index.ejs   ...
│   |   |       └───login.ejs
│   |
|   └───app.js // 서버부. app을 쏴주면 www.js와 router/home/index.js에서 해당 app을 사용한다. 그리고 home이라는 변수로 router를 받아온다.
|   └───index.html
|   └───package-lock.json
|   └───package.json // npm에 등록하거나, github에 올릴 때 어느 컴퓨터에서나 이 프로그램이 원할히 동작하도록 하는 기본 정보와 의존성패키지, 명령어를 모아놓은 파일.
// package.json의 각 key값이 하는 역할을 알면 좋다.
</code>
