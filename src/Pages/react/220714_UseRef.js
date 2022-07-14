import React, { useRef } from "react";

const data = [
  {
    id: 1,
    name: "jeon",
  },
  {
    id: 2,
    name: "choi",
  },
  {
    id: 3,
    name: "kim",
  },
  {
    id: 4,
    name: "lee",
  },
];
// useRef : 특정 dom 선택하기
// useRef : 값이 업데이트 되어도 재랜더링이 안된다
function UseRef() {
  const nextId = useRef(5);
  const focus = useRef();

  // current : 현재 dom을 가르킨다
  const onCreate = () => {
    nextId.current += 1;
    focus.current.focus();
  };

  return (
    <div>
      {/* ref={focus} : dom에 접근할 수 있게 선언 */}
      <input ref={focus} />
    </div>
  );
}

export default UseRef;
