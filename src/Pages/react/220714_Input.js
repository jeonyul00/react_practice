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
    console.log(e.target.name); // 이게 무슨말이지... 3분 50초 부터 다시 듣기... : name에서 변경됨, nickname에서 변겸됨을 감지한다, 이벤트에 대한 정보
    console.log(e.target.value);
    //
    const { name, value } = e.target;
    setInputs({
      // 객체 상태를 업데이트 할 때는 기존의 값을 그대로 가져와서 바꾸는게 아니고 -> 복사한 후 그걸 바꾼 다음 덮어 씌운다 : 이것이 불변성
      ...inputs,
      [name]: value,
      // 대괄호로 감싸지 않으면 name을 문자열로 인식한다
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input name="name" placeholder="name" onChange={onChange} value={name} />
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

export default Input;
