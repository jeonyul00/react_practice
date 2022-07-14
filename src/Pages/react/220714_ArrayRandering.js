import React from "react";

// 배열을 랜더링 할 때
const data = [
  {
    id: 1,
    name: "jeon",
  },
  {
    id: 2,
    name: "choi",
  },
  {
    id: 3,
    name: "kim",
  },
  {
    id: 4,
    name: "lee",
  },
];
function ArrayRandering() {
  return (
    <b>
      {data.map((v) => (
        <p>
          {v.id},{v.name}
        </p>
      ))}
    </b>
  );
}

export default ArrayRandering;
