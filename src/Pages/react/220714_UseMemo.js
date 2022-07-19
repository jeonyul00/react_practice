import React from "react";

// 고도화 작업 때 쓰던데 , 뭐 음 메모리에 값을 저장해두는 개념이었는데.. 다시 들어보자
// 이전에 연산된 값을 재사용할 때 쓰임
// 특정 값이 변이  변할때에만 특정 함수를 실행해서 연산하도록 처리한다
const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

function User({ data }) {
  const { id } = data;
  return (
    <>
      <div></div>
    </>
  );
}

function UseMemo() {
  return <div></div>;
}

export default UseMemo;
