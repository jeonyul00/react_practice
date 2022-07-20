import React, { useEffect } from "react";

const User = ({ user, onRemove, onToggle }) => {
  useEffect(() => {
    // 순서 1
    console.log("값이 설정", user);
    // 언마운트 될 때, clenup 함수, 순서 2
    return () => {
      console.log("값이 바뀌기전", user);
      // 이거 다 끝나고 값이 나온다
    };
  }, [user]);

  return (
    <>
      {user.id},
      <b
        style={{ color: user.active ? "blue" : "#808080" }}
        onClick={() => {
          onToggle(user.id);
        }}
      >
        {user.username}
      </b>
      <br />
      {user.email}
      <button
        style={{ marginLeft: 20 }}
        onClick={() => {
          onRemove(user.id);
        }}
      >
        삭제
      </button>
      <br />
    </>
  );
};

function ArrayData({ users, onRemove, onToggle }) {
  return (
    <>
      {users.map((user, index) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}
// props가 바뀌었을 때만 렌더링 함
// React.memo
export default React.memo(ArrayData);
