import React from "react";

// 자바스크립트의 문법을 체크해주는 도구, 커스텀 가능하지
// 공홈가면 뭐 설정 이름 많음 필요한것만 가져와서 커스텀하면 될 듯
// ex) no - unused - vars : 어떤 값을 선언하고 한 번도 안쓰면 경고 띄움, 이거 세팅하면 좋겠네
// 어떻게 세팅하냐?
// eslint 설치 -> package.json -> eslintConfig에 보면 이미 설정이 되어있음
// 설정에서 eslint 검색 후 turns auto fix on save on or off 체크하면 저장할 때 자동으로 수정해줌 이거 좀 별로 일 수도 있겠다

// 커스텀은 어떻게하냐?
// npm i eslint-config-airbnb : 이런거 개 많음 대표적인게 저거
// eslintConfig의 extends 를 []로 바꾼 후에 "airbnb"를 추가한다
// npm i eslint-config-prettier : 프리티어에서 관리하는 것들은 eslint에서 관리하지 않겠다 선언하기 위해서 설치
// eslintConfig의 extends 를 []로 바꾼 후에 "prettier"를 추가한다 (맨 마지막에 넣어야한다)
// 일부 규칙은 쓰고 싶지 않다면?
// eslintConfig의 extends급의 디렉토리에 "rules :{}" 추가 후 그 안에 규칙을 설정할 수 있다
// 2 : 오류 , 1 : 경고 , 0 : 비활성화

function ESLint() {
  return <div>ESLint</div>;
}

export default ESLint;
