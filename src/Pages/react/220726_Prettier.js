import React from "react";

// 자동으로 코드의 스타일을 관리해주는 도구
// ex) 작은따옴표를 쓸지 큰따옴표를 쓸지

// 세팅 순서
// cra -> 프리티어 설치 -> 프로젝트 디렉토리에 .prettierrc 파일 생성 ->
// {
//   객체나 배열 생성 시 값 뒤에 쉼표 넣을것 인지 말 것인지
//   "trailingComma : "all""
//   들여쓰기 몇 칸으로 할거냐 기본값은 4
//   "tabwidth : 4"
//   세미콜론 쓸지 말지
//   "semi : false"
//   작은 따옴표 쓰겠다
//   "singleQquote : true"
// }
// 등 뭐 많음 구글링 ㄱ
// -> f1 누른 후 format document 누르면 세팅 된다 근데 이거 그럼 매번 이래야하냐? ㄴㄴ 저장시 자동 실행하도록 세팅하면된다
// -> 왼쪽 상단 code -> 기본 설정 -> 설정 -> format on save 검색 후 체크 : 이러면 저장 시 자동 정렬
function Prettier() {
  return <div>Prettier</div>;
}

export default Prettier;
