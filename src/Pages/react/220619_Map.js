import React from "react";

// array 함수 중 Map
// 이상하게 맨날 까먹는다, 어레이 요소 하나씩 접근한다
function Map() {
  const arr = [
    { index: 1, name: "yul" },
    { index: 2, name: "yun" },
    { index: 3, name: "eun" },
    { index: 4, name: "da" },
    { index: 5, name: "seo" },
  ];

  // map() : prop에는 callbackFuntion, index (index가 필수는 아님 : 실무가니까 대부분 요소에 프라이머리 값 들어있더라)
  return (
    <>
      <div>
        {arr.map((sibal) => (
          <p>
            {sibal.index}, {sibal.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default Map;
