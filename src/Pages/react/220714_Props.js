import React from "react";

// props를 통해 값 전달하기
// function Props(props) {
//   return (
//     <div
//       style={{
//         color: props.color,
//       }}
//     >
//       {props.name}
//     </div>
//   );
// }

// 구조 분해 할당으로 전달, 이걸 더 자주 쓸 것 같다
function Props({ name, color }) {
  return <div style={{ color }}>{name}</div>;
}

// 기본값 정의
Props.defaultProps = {
  name: "이름없음",
};

export default Props;
