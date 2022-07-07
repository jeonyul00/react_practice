import React from "react";

// 예를 들어 첫자리에 0이 들어야 할 때 쓴다
"1".padStart(2, "0"); // 길이가 2가 되지 않는다면 앞에 0을 추가하여 2자리 수를 맞춘다
function PadStart() {
  return <div>PadStart</div>;
}

export default PadStart;
