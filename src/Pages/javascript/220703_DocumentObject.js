import React from "react";

// 브라우저에 대한 이해
// javascript를 사용하는 이유 : html과 상호작용하기 위해
// document : 브라우저에 이미 존재하는 object
//  ㄴ html을 가리키는 객체
// 요약 : 결국 브라우저가 읽는것은 html이다 그 html에서 javascript와 css가 호출되는거지
//  ㄴ 근데 document는 html에 접근하는 오브젝트이므로 결론적으로 화면에 보이는 모든것에 접근할 수 있다

console.log(document.title);
// 이처럼 html에 접근 가능하고 정제? 가능
// javascript로 html을 변경한거다 == javascript로 html을 컨트롤 할 수 있다
document.title = "율이의 행복한 개인 공부";
console.log(document.title);

// getElementById : html에서(최상위) id가 props인 값을 찾는다
// getElementsByClassName : html에서(최상위) class 이름이 props인 값을 찾는다
console.log(document.getElementById("title"));
console.log(document.getElementsByClassName("className"));

const html = document.getElementsByClassName("className");
html[0].innerHTML = "이 밑으로 부터는 javascript영역";

// document 오브젝트 안에는 수많은 함수들이 있다 예를 들면 innerHTML , Autofocus etc

function DocumentObject() {
  return (
    <>
      <div>브라우저에 대한 이해</div>
    </>
  );
}

export default DocumentObject;
