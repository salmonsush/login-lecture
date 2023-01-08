"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("#login-btn");

console.log(id); // 로그인 화면 진입시 멈추는 증상 발생. 이젠 안함. defer를 사용해서 먼저 실행되는 문제는 해소.

loginBtn.addEventListener("click", login);

function login() {
  const req = { // 요청 데이터이므로 이 변수 안에 담아 서버로 fetch를 통해 전달한다. html문서에서 전달할 데이터를 받아온 것.
    id: id.value,
    psword: password.value
  };
  
  // fetch를 통해 전달. 서버 개발자가  어떤 경로를 통해서 주고 받을지를 정한다. API는 나중에 만들고, 먼저 경로부터 명시해주자. 실제 개발은 따로, 또 반대의 순서이다. 프론트와 백엔드가 경제적으로 협업을 하기 위함인걸까?
  fetch("/login", { 
    method: "POST", //body를 통해서 전달할 때는 POST 메소드로 서버로 전달.
    headers: {
      "Content-Type": "application/json" // 전달하는 데이터가 JSON임을 명시해주기 위한 HEADER.
    },
    body: JSON.stringify(req), // json 데이터 타입으로 전달하기 위해 object 데이터를 문자열로 바꾸고, json으로 보내준다. 이 떄 json 객체도 문자열로 감싸져있음을 기억하라.
  }).then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
}
// 위 요청이 제대로 작동하기 위해선, 서버에서 POST방식으로, /login 경로로, 문자화된 json형식으로 데이터를 받는 api가 마련되어 있어야 한다.