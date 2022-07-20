import React, { useRef } from "react";

function ArrayDetail({ username, email, onChange, onCreate, focus }) {
  // const focus = useRef();
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
        ref={focus}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
// props가 바뀌었을 때만 렌더링 함
// React.memo
export default React.memo(ArrayDetail);
