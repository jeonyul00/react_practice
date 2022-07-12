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

function Promise() {
  return <div>Promise</div>;
}

export default Promise;
