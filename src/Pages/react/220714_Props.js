import React from "react";

// props를 통해 값 전달하기
function Props(props) {
  return (
    <div
      // 객체인 자바스크립트 값이라서 {{}} 이렇게 된다
      style={{
        color: props.color,
      }}
    >
      {props.name}
    </div>
  );
}

// 구조 분해 할당으로 전달, 이걸 더 자주 쓸 것 같다
export function Props2({ name, color }) {
  // color : color 인데 같은 명이면 생략 가능한가...?
  return <div style={{ color }}>{name}</div>;
}

// 기본값 정의
Props.defaultProps = {
  name: "이름없음",
};

// props children : 값을 조회하기 위해? : 지금 코드는 스타일 먹인건데 테두리를
// 아 반드시 children 이라고 써야하네 왜지
// 태그와 태그 사이에 넣는 내용 : children
export function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: 20,
  };
  return <div style={style}>{children}</div>;
}

export default Props;
