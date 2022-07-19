import React, { useState } from "react";

// 뭘 적어야 되지;
function UseState() {
  // useState를 구조분해 할당 한 것이다
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // setNumber(number + 1);

    // 함수형 업데이트 : 어떻게 업데이트 할 지 : 나중에 최적화 할 때 필요하다
    // 현재 상태를 가져와서 이렇게 업데이트 하겠다
    setNumber((prev) => prev + 1);
  };
  const onDecrease = () => {
    // 1, 아예 값을 바꾸는 방법
    // setNumber(number - 1);

    //2 ,현재 상태를 가져와서 이렇게 업데이트 하겠다
    setNumber((prev) => prev - 1);
  };

  return (
    <div>
      <h1 style={{ padding: 20 }}>{number}</h1>
      {/* 함수를 넣는거지 호출하면 안된다 */}
      {/* ()를 쓰면 랜더링 시 바로 호출되어 버린다 */}
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default UseState;
