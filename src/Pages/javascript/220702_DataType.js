// data type
import React from "react";

const number = 5;
const string = "2";

const exFunction = () => {
  return (
    console.log(number + string),
    console.log(number * string),
    console.log(number / string),
    console.log("  number  " + "  string  "),
    console.log(typeof 0), // number
    console.log(typeof ""), // string
    console.log(typeof "0"), // string
    console.log(Boolean("0")), // true
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log(Boolean(0)), // false
    console.log(Boolean(undefined)), // false
    console.log(Boolean(null)), // flase
    console.log(Boolean("")) // false
  );
};

function DataType() {
  return (
    <>
      <div>{exFunction()}</div>
    </>
  );
}

export default DataType;
