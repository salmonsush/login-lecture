"use strict";
// 서버를 띄워주는 코드
const app = require("../app"); //상위폴더로 가서 app.js를 불러온다. 이러기 위해서 app에서도 내보내줘야 함.
const PORT = 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
});

