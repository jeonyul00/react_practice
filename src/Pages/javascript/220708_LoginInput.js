import React from "react";

// id가 login-form인 곳에서 input과 button을 찾는다
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// click 시 호출할 함수 정의
const handleClickEvent = () => {
  // 유효성 검사, js로만 구현하기 때문에 이런 불필요한 코드도 쓰는중, form에서 maxlength
  const value = loginInput.value;
  // console.log("testValue =====> ", value);
  if (value == false) {
    alert("pleas write yout name");
  } else if (value.length > 15) {
    alert("too long");
  }
};

// submit이나 button을 누르면 새로고침 된다

// login button에 이벤트 달기
loginButton.addEventListener("click", handleClickEvent);

function LoginInput() {
  return (
    <>
      <div>리액트 안쓰고 자바스크립트로만 구현</div>
    </>
  );
}

export default LoginInput;
