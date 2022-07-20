import React, { useEffect, useState } from "react";

function UseEffect() {
  const [v, setV] = useState(false);
  const [test, setTest] = useState(false);

  // 의존성이 변할 때 랜더링 되도록 한다
  // useEffect의 가장 큰 특징 : 콜백함수, 의존성 , 클린업 함수 : 업데이트 직전과 컴포넌트가 언마운트 될 때 호출 된다-> 이거 다 끝나고 값이 나온다
  useEffect(() => {
    setV(!v);
  }, [test]);

  const handleE = () => {
    setTest(!test);
  };

  return (
    <div onClick={handleE}>
      {v && <div>v</div>}
      {test && <div>test</div>}
    </div>
  );
}

export default UseEffect;
