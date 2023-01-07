"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("#login-btn");

console.log(id); // 로그인 화면 진입시 멈추는 증상 발생. 이젠 안함. defer를 사용해서 먼저 실행되는 문제는 해소.

loginBtn.addEventListener("click", login);

function login() {
  const req = { // 요청 데이터이므로 이 변수 안에 담아 서버로 fetch를 통해 전달한다.
    id: id.value,
    psword: password.value
  };
  
  fetch("/login", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  });
}