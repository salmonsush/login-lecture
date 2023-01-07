/** 
function findUser(id) {
  let user;
  setTimeout(function () {
    console.log("waited 0.1 sec.");
    user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
  }, 100);
  return user;
}

const user = findUser(1);
console.log("user:", user); // 결과값을 이용해서 처리하는 로직. 후에 콜백함수의 인자로 던져진다.
*/

function findUserAndCallBack(id, cb) { // cb(abc)와 같이 인자도 있음을 매개변수로 알려주면, javascript 문법은 받아들이지 못한다.
  setTimeout(function () {
    console.log("waited 0.1 sec.");
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
    console.log(typeof(cb));
    cb(user);
  }, 100);
}

findUserAndCallBack(1, function (user) {
  console.log("user:", user);
});

//일부러 내는 오류.
// 호출자에서 인자를 어떻게 주느냐에 따라서 함수 정의가 맞았을 수도 있고 틀렸을 수도 있다.
// const Ab = 3;
// findUserAndCallBack(2, Ab);

/**
 *결론: function (user) {} 의 호출자는 익명함수를 콜백함수 자리에 인자로서 던져준 것이 그 의미. 여기서 왜 user 매개변수가 필요했을까?
 *함수부에서 cb(user)라 해준 것으로 실행을 다시 호출자에 콜백으로 담긴 익명함수를 실행하는 의미.
 *다시 익명함수부로 돌아오면, 실행할 때에 단순하게도 user변수 값이 필요하다. 그래서 콜백함수 자리에 매개변수로 user를 써줬다. 이 값은 cb(user)와는 달라도 되지만, cb(user)는 const user와 같아야 하고, function (user)는 그 아랫줄 user 와 같아야 한다.
 */

// 제일 중요한건, node.js가 cb가 함수인걸 호출자를 보고서야 안다는 부분이다.

findUser(1).then(function (user) {
  console.log("user:", user);
});

function findUser(id) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("waited 0.1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
      resolve(user);
    }, 100);
  });
}

function fetchAuthorName(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => post.userId)
    .then((userId) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((user) => user.name);
    });
}

fetchAuthorName(1).then((name) => console.log("name:", name));