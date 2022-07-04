import React from "react";

const exObject = [
  {
    name: "yul",
    age: 29,
    gender: "man",
  },
  {
    name: "kimyunji",
    age: 27,
    gender: "woman",
  },
  {
    name: "kimdabong",
    age: 23,
    gender: "woman",
  },
];

// 수정
exObject[0].name = "jeonyul";

// 추가
exObject[0].address = "seoul";

// const는 상수인데 왜 업데이트가 가능하냐 : 프로퍼티를 바꿨지 오브젝트를 바꾼게 아니기 때문이다
// error는 constant 전체를 하나의 값으로서 업데이트 하려고 할 때 발생한다

function Object() {
  return (
    <>
      {exObject.map((v) => {
        return (
          <p>
            {v.name},{v.address}
          </p>
        );
      })}
    </>
  );
}

export default Object;
