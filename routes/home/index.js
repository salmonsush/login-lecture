"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")
// 브라우저에서 root 경로로 요청이 들어오면, 암묵함수의 기능을 실행하겠다.
router.get("/", ctrl.main);

router.get("/login", ctrl.login);

// app.js와 index.js를 연결해주는 코드
module.exports = router;