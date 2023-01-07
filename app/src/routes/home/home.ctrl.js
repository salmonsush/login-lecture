"use strict";

const users = {
  id: ["woorimIT", "나개발", "김팀장"],
  psword: ["1234", "1234", "12334"],
};
const output = {
  main : (req, res) => {
    res.render("home/index");
  },  
  login : (req, res) => {
    res.render("home/login");
  }
  
}

const process = {
  login: (req, res) => {
    console.log(req.body);
  }
}

// index.js(라우터)에서 이 컨트롤러의 기능(암묵함수)를 사용할 수 있도록..
module.exports = {
  output, // output : output
  process, // process : process
};

