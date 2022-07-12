import React from "react";

// spread , rest
// spread : 펼치다 : ... 연산자 : 기존의 객체 복사
const slime = {
  name: "슬라임",
};
const cuteSlime = {
  //   name: "슬라임",
  ...slime,
  attribute: "cute",
};
const purpleCuteSlime = {
  //   name: "슬라임",
  //   attribute: "cute",
  ...cuteSlime,
  color: "purple",
};

// arr에서 ...
const num = [1, 2, 3, 4, 5];
const bigNum = [...num, 6, 7, 8, 9]; // concat이랑 같은 개념인가..?

// rest : 객체 , 배열 , 함수의 파라미터에서 쓸 수 있다는데 이게 뭔데
const purpleBlackSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "black",
};

const { color, ...vvv } = purpleBlackSlime;
// color : black , ...vvv : black을 뺀 나머지의 값들, 그럼 맨 앞는 올 수 없겠네

// props에 들어오는 모든 파라미터를 하나의 배열로 받아온다
function add(...vvvvvvvvvvvvv) {
  return vvvvvvvvvvvvv.reduce((acc, current) => acc + current, 0);
}
add(1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 6, 4, 2, 3, 6, 7, 8, 9, 999, 9);

//
function SpreadRest() {
  return <div>SpreadRest</div>;
}

export default SpreadRest;
