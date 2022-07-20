import React from "react";

// 배열을 랜더링 할 때
const users = [
  {
    id: 1,
    username: "jeonyul",
    email: "jeonyul00@gmail.com",
  },
  {
    id: 2,
    username: "kimbongda",
    email: "bongdas@naver.com",
  },
  {
    id: 3,
    username: "kimyunji",
    email: "WeMB@daum.com",
  },
  {
    id: 4,
    username: "kimeunhee",
    email: "heeheehee@gamil.com",
  },
];
function ArrayRandering() {
  return (
    <b>
      {users.map((v) => (
        <p key={v.id}>
          {v.id},{v.username}
          <p style={{ paddingLeft: 20 }}>{v.email}</p>
        </p>
      ))}
    </b>
  );
}

export default ArrayRandering;
