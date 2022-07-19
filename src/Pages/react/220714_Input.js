import React, { useState } from "react";

function Input() {
  // const [text, setText] = useState("");

  // 구조 분해 할당 없이 선언하는 방식
  const state = useState("");
  const text = state[0];
  const setText = state[1];

  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  // 비구조화 할당을 통해 추출
  const { name, nickname } = inputs;

  // 함수 생성, e는 이벤트에 대한 내용
  const onChange = (e) => {
    console.log(e.target.name); // 이게 무슨말이지... 3분 50초 부터 다시 듣기...
    console.log(e.target.value);
  };

  const onReset = () => {};

  return (
    <div>
      <input name="name" placeholder="name" onChange={onChange} />
      <input name="nickname" placeholder="nickname" onChange={onChange} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        name (nickname)
      </div>
    </div>
  );
}

export default Input;
