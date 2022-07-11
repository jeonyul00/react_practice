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

// 비구조화 할당 , es6에 있는 문법으로 객체구조분해라고도 부름, 객체에서 특정값을 추출해내는것
const ironMan = {
  name: "토니스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
  // 화살표 함수는 자기가 속해있는 this 명령이 안먹힘 -> 그래서 function을 씀
  say: function () {
    console.log(`i am ${this.alias}`);
  },
};

// function print(hero) {
//   // 객체 내부의 값을 빼와서 선언
//   const { alias, name, actor } = hero;
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 배우 입니다`;
//   console.log(text);
// }

// 이런식으로 더 많이 씀
function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 배우 입니다`;
  console.log(text);
}

print(ironMan);

// 객체 내에서 getter , setter 함수
const car = {
  name: "avante",
  price: "230,000,000",
  // get
  getName() {
    return this.name;
  },
  // set
  setName(newName) {
    this.name = newName;
  },
};

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
