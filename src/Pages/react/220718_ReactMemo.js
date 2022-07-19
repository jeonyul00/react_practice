import React from "react";

// 컴포넌트에서 재 랜더링이 불필요할 때 이전의 랜더링을 재사용할 수 있게 한다
function ReactMemo() {
  return <div>ReactMemo</div>;
}

// props가 바뀌었을때만 재랜더링을 해준다
export default React.memo(ReactMemo);
