import React from "react";

function print() {
  if (!name) {
    return;
  }
  console.log(name);
}

const name = "yul";

print();

// false
function _false() {
  console.log(0);
  console.log("");
  console.log(NaN);
  console.log(undefined);
  console.log(null);
  console.log(false);
}

// true
function _true() {
  console.log("0");
  console.log([]);
  console.log({});
}

function TruthyFalsy() {
  return <div>TruthyFalsy</div>;
}

export default TruthyFalsy;
