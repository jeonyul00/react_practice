import React from "react";

// filter() : 배열의 요소를 순차적으로 순회하면서 조건에 일치하는 요소를 모아 새로운 배열을 반환
function Filter() {
  const arr = [
    { index: 11, name: "yul", age: 29 },
    { index: 22, name: "yun", age: 26 },
    { index: 33, name: "eun", age: 25 },
    { index: 44, name: "da", age: 23 },
    { index: 55, name: "seo", age: 20 },
  ];

  const values = arr.filter((v) => {
    return v.age > 20;
  });

  // 아니 시발 키 넣어줬는데 왜 키 경고 뜨냐 ㅅㅂ
  // 왜 안먹히지..
  return (
    <>
      {/* <div
        key={values.map((v) => {
          return v.index;
        })}
      > */}
      <div>
        {values.map((v) => {
          return (
            <p key={v.index}>
              {v.name},{v.age}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Filter;
