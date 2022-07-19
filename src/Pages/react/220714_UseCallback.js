import React from "react";

// useCallback : 이전에 만든 함수를 재사용할 수 있게하는 훅
// 컴포넌트가 재 랜더링 될 때 마다 함수를 다시 만든다
// useCallback : 랜더링 되더라도 함수가 재랜더링 되지 않도록 하는것
// useMemo : 특정 값이 변할 때 특정 함수가 랜더링되도록 하는 것
function UseCallback() {
  return (
    <div>
      <>UseCallback</>
    </div>
  );
}

export default UseCallback;
