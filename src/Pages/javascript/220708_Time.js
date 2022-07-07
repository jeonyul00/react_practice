import React from "react";

const clock = () => {
  const date = new Date();
  console.log(date.getHours());
};

function Time() {
  <>
    <div>{clock()}</div>
  </>;
}

export default Time;
