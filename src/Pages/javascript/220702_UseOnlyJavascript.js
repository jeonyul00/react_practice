import React from "react";

// javascript
// 프론트엔드에 쓸 수 있는 유일한 프그래밍 언어
// 브라우저는 html을 열고 html이 css와 javascript를 쓰는거다 => 그래서 순서가 최초에 index.html이 호출되고 index.js => app.js 인것
// 다시말해 css와 javascript를 연다고 그게 실행 되는게 아니다

function UseOnlyJavascript() {
  alert("hi");
  return <div>UseOnlyJavascript</div>;
}

export default UseOnlyJavascript;
