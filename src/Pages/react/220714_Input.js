import React, { useState } from "react";

function Input() {
  const [value, setValue] = useState({
    name: "",
    nickname: "",
  });
  // 비구조화 할당
  const { name, nickname } = value;

  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({
      // 객체 상태를 업데이트 할 때는 기존의 값을 복사 한 후에 거기다가 값을 업데이트해야한다
      ...value,
      [name]: value,
    });
  };

  const onReset = () => {
    setValue({
      name: "",
      nickname: "",
    });
  };

  return (
    <>
      <div>
        <input
          onChange={onChange}
          placeholder="name"
          name="name"
          value={name}
        />
        <input
          onChange={onChange}
          placeholder="nickname"
          name="nickname"
          value={nickname}
        />
        <button onClick={onReset}>초기화</button>
        <div>
          <p>
            <b>name : </b>
          </p>
          <p>
            <b>nickname : </b>
          </p>
        </div>
      </div>
    </>
  );
}

export default Input;
