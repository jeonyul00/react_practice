import React from "react";

// ---------- callback function ---------- : 함수 안의 함수 : 다른 함수의 입력값으로 들어가서 다른 함수에 의해서 호출되는 함수, 여기서는 화살표 함수
const words = ["jeon", "choi", "kim", "lee"];
const newWord = words.filter((v) => {
  return v.length > 6;
});
console.log(newWord);

// ---------- promise ---------- : 비동기적 처리를 할 때 쓰임 , ex : 통신 : 언제 끝날지 모르거나 할 때
// fetch 뿐 아니라, promis를 반환하는 함수들은 then을 쓸 수 있는데 xxxxxx.then을 하면 xxxxxx를 실행한 후에 then(callback)실행하도록하는 것이다
fetch("https://jsonplaceholder.typicode.com/posts") // fetch()는 promise를 return 한다 : 비동기적으로 동작하는 함수일 확률이 높다, 두개의 메소드를 사용할 수 있다 (then, cache)
  // then : 통신 성공 시 호출 (콜백함수를 호출)
  // cache : 통신 실패 시 호출 (콜백함수를 호출)
  .then(function (res) {
    return res.json().then((v) => {
      console.log(v);
    });
  })
  .then(function (myJson) {
    console.log(myJson);
  })
  .catch((e) => {
    console.log(e);
  });

// ---------- async & await ---------- : promise 문법 마저도 귀찮았나보다 -> 그래서 나온 문법, promise를 리턴하는 비동기적인 함수를 만든다

// promise를 반환하는 함수 생성
function timer(sec) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(sec);
    }, sec);
  });
}

// promise 방식의 문법
console.log("start");
timer(1000)
  .then(function (sec) {
    console.log(sec);
    return timer(sec + 1000);
  })
  .then(function (sec) {
    console.log(sec);
    return timer(sec + 1000);
  })
  .then(function (sec) {
    console.log(sec);
    console.log("end");
  });

// async await 문법
async function run() {
  console.log("start");
  let sec = await timer(1000);
  console.log(sec);
  sec = await timer(1000);
  console.log(sec);
  sec = await timer(1000);
  console.log(sec);
  console.log("end");
}

// 여기서 부터 중요
run(); // start - 1 - 2 - 3 - end

// 근데 이렇게하면?
console.log("start start");
run();
console.log("end end");
// startstart - start - endend - 1 - 2 - 3 - end : 왜냐면 run()이 비동기적인 함수이기 때문이지

// 해결 : 저것도 한 번 더 async로 만들거나 밑에처럼 .then으로 끝내기
console.log("start start");
run().then(function () {
  console.log("endend");
});

// ---------- new Promise ---------- : promise 만들기
// new Promise(콜백함수) : 콜백함수에는 props로 resolve , reject 를 받는다 => 변수명은 마음대로이지만 관습적
// resolve : 성공시 호출할 함수
// reject : 실패시 호출할 함수
const yul = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("성공");
    }, 2000);
  });
};

const yul2 = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("성공");
    }, 2000);
  });
};

// 쨘
yul()
  .then(function (v) {
    console.log(v);
    return yul2(); // 또 다른 promise를 리턴하면 그 값이 then의 리턴값이 된다..?
  })
  .catch((e) => {
    console.log(e);
    return Promise.reject(); // 만역 catch에서 에러를 잡았을 때 그 뒤 then을 실행시키지 않으려면 Promise.reject();
  })
  .then((v) => {
    console.log(v);
  });

// ---------- promise All & Race ----------
// promise.all : 비동기식 함수들이 작업을하고 마지막으로 작업이 끝난 후에 실행 시킬 함수 정의
// promise.race : 비동기식 함수들이 작업을하고 제일 처음 작업이 끝난 비동기 함수가 작업 종료 후 실행 시킬 함수 정의 : 이렇게 되면 다른 함수들은 아직 작업 중이지만 뒤에가 다 날라감 = 거의 쓸 일 없겄네
Promise.all([timer(1000), timer(2000), timer(3000)]).then((result) => {
  // 비동기 함수들이 배열로 들어옴 : 이것 중 가장 마지막에 끝나는 함수가 작업을 마친 후 콜백함수가 호출됨 : 여기서는 3초 후에 실행되겠지
  console.log(result);
  // result는 props에 배열로 넣은 비동기 함수들의 리턴값을 배열로 반환해줌 : 여기서는 [1000, 2000, 3000] 이렇게 나오겠지
});

function Promise() {
  return <div>Promise</div>;
}

export default Promise;
