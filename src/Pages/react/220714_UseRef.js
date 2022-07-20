import React, { useRef, useState } from "react";

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

// useRef : dom에 직접 접근 할 수 있다
function UseRef() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  // 객체 생성
  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus(); // current : dom을 가르킨다
  };

  return (
    <div>
      <input
        name="name"
        placeholder="name"
        onChange={onChange}
        value={name}
        ref={nameInput} // dom에 접근할 곳이 어디인지 컴퓨터가 알 수 있도록 선언
      />
      <input
        name="nickname"
        placeholder="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default UseRef;
