"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


// 라우팅
const home = require("./src/routes/home/index"); // 라우터를 객체로 받아오는 코드.


// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
// 특정 경로에 대한 라우팅 기능은 routes/home의 index.js에서 한다.


// 뷰에 관한 코드는 views/home의 각 페이지 이름.ejs로 갔다.

app.use(express.static(`${__dirname}/src/public`)); // 정적 경로인데, 자세한 사항을 까먹었다. 어디선가 쓰인다. 이걸 알아야 할텐데..
app.use(bodyParser.json()); // 이게 없으면 id와 pw가 undefined로 뜬다. controller에서 req.body로 받아오려고 하지만, 그것도 못띄우는 문제를 해결한다.
app.use(bodyParser.urlencoded( {extended:true}));
app.use("/", home); // use: 미들웨어를 만드는 메서드. 맨 처음에 클라이언트의 요청이 서버의 루트 경로로 들어오면, home으로 보내준다.
// home으로 저장된 라우터에서 라우팅을 할 수 있도록 하는 코드이다. index.js의 router.get("/", ctrl.output.main);에 의해 메인 페이지가 클라이언트에 보여진다.


module.exports = app; // bin/www.js에서 쓰기 위해 쏴주는 코드.

findUserAndCallBack(1, function (user) {
  console.log("user:", user);
});

function findUserAndCallBack(id, cb) {
  setTimeout(function () {
    console.log("waited 0.1 sec.");
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
    cb(user);
  }, 100);
}