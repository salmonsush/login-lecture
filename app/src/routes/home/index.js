"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")
// 브라우저에서 root 경로로 요청이 들어오면, 암묵함수의 기능을 실행하겠다. 암묵함수?? 여기에 쓰이긴 했나??
// 라우터는 도메인으로 요청이 들어왔을때, 적절 문서를 암묵함수로 연결해준다. 이 암묵함수를 controller(어떤 html문서를 보이게 할 건지 결정을 제어하는 코드)를 home.ctrl.js로 보냈다.
// 이렇게 MVC 패턴을 처음으로 C(Controller)를 구현했다.
router.get("/", ctrl.output.main);

router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login); // login.js(클라이언트)에서의 요청(POST, /login경로, json데이터)를 받는 서버의 api. 기능은 컨트롤러에 위임.

// app.js와 index.js를 연결해주는 코드
module.exports = router;