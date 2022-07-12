import React from "react";

// global , function , block
// global : 전역
// function : 특정 함수 내부
// block : 블록 내부
// 에서 사용가능

// hoisting : 아직 선언되지 않은 함수 또는 변수를 먼저 쓸 수 있는 작동 방식 : 왠만하면 피해야 하는 방식

// 함수 선언 전 사용
myFunction();

function myFunction() {
  console.log("test");
}

// 변수도  var는 호이스팅이 됨, 이게 치명적이라 let이 나온거다

console.log(num); // undefined , 선언읕 되었는데 값을 모르겠다 이게 왜 이렇게 되냐면
var num = 1;

// 위의 코드가 빌드 시 이런 방식으로 되기 때문에 undefiend가 뜨게 된다
var number;
console.log(number);
number = 1;

//
function Scope() {
  return <div>Scope</div>;
}

export default Scope;
