import React, { createContext, useContext } from "react";

// Context API : 리액트에서 전역적인 값을 관리하는 법
// props 드릴링을 막기위해 쓰인다 : 이거 redux랑 같은 개념인가.. 그럼 하나만 쓰지 왜...

// ex : 페어런츠와 그랜드페어런츠를 안거치는 방법은..?
// function Child({ text }) {
//   return <div>안녕? {text}</div>;
// }

// function Parent({ text }) {
//   return <Child text={text} />;
// }

// function GrandParent({ text }) {
//   return <Parent text={text} />;
// }
// function Context() {
//   return <GrandParent text="jeonyul" />;
// }

// 생성
const MyContext = createContext("defalutValue");

function Child() {
  // 사용
  const text = useContext(MyContext);
  return <div>안녕? {text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}
function Context() {
  return (
    // provider를 통해서 기본값을 바꿈
    <MyContext.Provider value="jeonyul">
      <GrandParent />
    </MyContext.Provider>
  );
}

export default Context;
