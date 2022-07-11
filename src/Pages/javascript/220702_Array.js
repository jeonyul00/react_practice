import React from "react";

// array가 뭔지는 안다 그걸 왜 쓰는지 모른다
// array는 데이터 정리에 관한 것 : 데이터 구조에 관한 것
// 어떻게 하면 가능한 최선의 방법으로 데이터 정리를 할 수 있을까

// array가 없다면?
let mon = "mon";
let tue = "tue";
let wed = "wed";
let thu = "thu";
let fri = "fri";
let sat = "sat";
let sun = "sun";

// araay가 있다면
let daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// add item
daysOfWeek.push("sun");

// slice, index ~ index 까지 잘라서 보여줌
// 2번째 index 엄청 길게 해도 노상관
daysOfWeek = daysOfWeek.slice(0, 2);

// concat : 배열 끝에 새로운 요소 추가 : 실무에서 많이 쓰일것 같다
daysOfWeek = daysOfWeek.concat("wed", "thu", "fri", "sat", "sun");

// 배열 내장 함수 심화 ==================================================\
const number = [1, 2, 3, 4, 5];
// forEach : 반복문
number.forEach(() => {
  console.log(number);
});

// map : 배열안의 요소를 변환하고 싶을때 사용
const nuwNum = number.map((n) => n * n);

// filter : 특정 조건을 만족하는 요소를 찾아서 새로운 배열을 만든다
const userFirstname = [
  {
    firstName: "jeon",
  },
  {
    firstName: "jeon",
  },
  {
    firstName: "choi",
  },
  {
    firstName: "kim",
  },
  {
    firstName: "lee",
  },
];

const newFirstName = userFirstname.filter((v) => v.firstName === "jeon");
console.log(newFirstName); // 특정 조건에 만족하는 요소만 나옴 : jeon만 나오겠지

// splice , slice
const nubers = [1, 2, 3, 4, 5, 6];
// splice : 특정 항목 제거 할 때 사용
nubers.splice(1, 2); // 1번 인덱스 부터 시작해서 2개 지우겠다, 그리고 이 지운값이 이 함수의 값임 이게 무슨말이냐면 그건 밑에
const value = nubers.splice(1, 2); // value = [2,3]

// slice : 배열을 잘라낼 때 사용 되는데 , 기존의 배열을 건들지 않는다
const slice = nubers.slice(1, 2); // 1번 인데스부터 2번 인덱스까지 자르겠다 , 이 명령 후에도 기존의 배열 값은 변하지 않는다, splice는 잘라서 버리는데 비해 slice는 자르기만 하는거지

// shift , pop , unshift
// shift : 첫번째 원소를 배열에서 추출, 기존의 원소를 하나씩 밖으로 빼내주는거지
// pop : 마지막 원소를 배열에서 추출 , 기존의 원소를 하나씩 밖으로 빼내주는거지
// unshift : 0번 인덱스에 요소 추가 : push는 마지막 인덱스에 추가 되는데 비스무리 하네
// concat : 더하기
// join : 문자열로 더하기, 근데 요소들 사이에 뭘 넣을 수 있다

// reduce : 배열이 주어졌을 때 베열 안의 값들로 어떤걸 연산해야 할 때 사용
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Array() {
  return (
    <>
      <div>{daysOfWeek}</div>
    </>
  );
}

export default Array;
