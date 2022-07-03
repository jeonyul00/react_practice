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

function Array() {
  return (
    <>
      <div>{daysOfWeek}</div>
    </>
  );
}

export default Array;
