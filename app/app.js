"use strict";

// 모듈
const express = require("express");
const app = express();


// 라우터
const home = require("./src/routes/home");


// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
// 특정 경로에 대한 라우팅 기능은 routes/home의 index.js에서 한다.
// 뷰에 관한 코드는 views/home의 각 페이지 이름.ejs로 갔다.

app.use("/", home); // use: 미들웨어를 만드는 메서드.

module.exports = app;