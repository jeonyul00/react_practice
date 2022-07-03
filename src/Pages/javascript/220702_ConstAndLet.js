import React from "react";

// const : 상수 : 변하지 않는 값
// let : 일반적인 자료형, 과거에는 var가 있었다 차이점은 곧..
// 언제쓰냐 최초에 변수 선언할 때 쓴다
// 눈치껏 어 let이면 어딘가에서 업데이트 되는구나~ 어

// var : 과거의 잔해 : let이 나오기전 쓰던 자료형 : 업데이트 추적이 어려움, 호이스팅..?

const string = "2";
// string = "3"; // const를 업데이트하면 consloe에서 error

// let
let name = "jeonyul";
name = "yul";
name = "choi";
name = "kim"; // 마지막 업데이트 값이 변수에 덮어씌워진다

function ConstAndLet() {
  return (
    <div>
      {name},{string}
    </div>
  );
}

export default ConstAndLet;
