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
  login: (req, res) => { // req에서 클라이언트의 로그인 요청정보인 입력값을 req로 받아온다.
    console.log(req.body); // body-parser를 app.js에서 require하고, 미들웨어로 등록해서 사용해야 한다.

    const id = req.body.id; 
    const psword = req.body.psword;

    if (users.id.includes(id)){ // res객체에 로그인 성공 혹은 실패 정보를 담아 넘긴다.
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword){
        return res.json({
          success: true,
        });
      }
    } 
    return res.json({
      success: false,
      msg: "로그인에 실패했습니다.",
    });
  }
}

// index.js(라우터)에서 이 컨트롤러의 기능(암묵함수)를 사용할 수 있도록..
module.exports = {
  output, // output : output
  process, // process : process
};

