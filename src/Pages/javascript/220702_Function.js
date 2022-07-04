import React from "react";
// function : 함수 : 반복해서 사용할 수 있는 코드 조각

// props는 함수 안에서만 존재 : 생명주기
function hello(value) {
  // console.log("hello " + value);
}

// () : 실행
hello("jeonyul");
hello(); // undefined

// object로 해보면
const exObject = {
  name: "jeonyul",
  func: function hi(vvv) {
    // console.log("hi " + vvv);
  },
};

function Function() {
  return <div>{exObject.func("jeonyul")}</div>;
}

export default Function;
