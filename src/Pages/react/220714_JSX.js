import React from "react";

// jsx 문법 : 리액트에서 컴포넌트의 생김새를 정의 할 때 사용하는 문법 : return 안에서 쓰는 문법이겠지
// html처럼 생겼지만 javascript 이다 : 바벨이라는 도구가 xml형태의 코드가 자바스크립트로 변환시켜줌
// 태그는 꼭 닫는다
// 두 개 이상의 태그는 하나의 태그로 감싸준다
function JSX() {
  const name = "yul";
  return (
    <>
      <div>{name}</div>
      <div>test</div>
    </>
  );
}

export default JSX;
