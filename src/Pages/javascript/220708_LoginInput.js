// import React from "react";

// const loginInput = document.querySelector("#login-form input");
// const loginForm = document.querySelector("#login-form");
// const view = document.querySelector("#view");

// // Submit 시 호출할 함수 정의 : click 아님 Submit
// const handleSubmitEvent = (event) => {
//   // submit의 기본 기능(새로고침)을 막음
//   event.preventDefault();
//   // 유효성 검사, js로만 구현하기 때문에 이런 불필요한 코드도 쓰는중, form에서 maxlength
//   const value = loginInput.value;
//   if (value == false) {
//     alert("pleas write yout name");
//   } else if (value.length > 15) {
//     alert("too long");
//   }
//   // test
//   console.log("testValue =====> ", value);
//   // 유저 이름을 입력 시 인풋창 사라지게 설정
//   const userName = loginForm.value;
//   loginForm.classList.add("hidden");
//   // local storage : 스토리지에 저장해두기
//   // setItem으로 local storage에 저장가능함 : 불러올때는 getItem
//   localStorage.setItem("useName", value);
//   // view.innerText = "hello " + value;
//   // 밑의 코드랑 같은 뜻임... 오 백틱 이럴때 쓰는거구나
//   view.innerText = `hello ${value}`;
//   view.classList.remove("hidden");
//   //
//   const storageName = localStorage.getItem(userName);
//   if (storageName === null) {
//     loginForm.classList.remove("hidden");
//     loginForm.addEventListener("submit", handleSubmitEvent);
//   } else {
//     view.classList.remove("hidden");
//   }
// };

// // 이벤드 달기
// loginForm.addEventListener("submit", handleSubmitEvent);

// function LoginInput() {
//   return <>{/* <div>리액트 안쓰고 자바스크립트로만 구현</div> */}</>;
// }

// export default LoginInput;
