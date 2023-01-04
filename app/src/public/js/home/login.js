"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginBtn = document.querySelector("#login-btn");

// console.log(id); // 로그인 화면 진입시 멈추는 증상 발생

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: password.value
  };
  
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  });
}