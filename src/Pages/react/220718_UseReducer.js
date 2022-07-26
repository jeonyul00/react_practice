import React, { useReducer } from "react";

// 컴포넌트의 상태를 업데이트 할 수 있다 : useState도 마찬가지 아닌가..
// useState와 차이점 : useState는 설정하고 싶은 다음 값을 직접 지정해줘야한다
// useReducer의 경우는 액션이라는 객체로 상태를 업데이트한다 : 액션 객체란 업데이트할 때 참조하는 객체 : type에 따라 어떤 업데이트를 할지 분기처리를 한다
// 컴포넌트의 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능
// reducer : 상태를 업데이트 하는 함수
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
};

const init = {
  inputs: {
    name: "",
    email: "",
  },
  users: [
    {
      id: 1,
      name: "jeonyul",
      email: "jeonyul00@gmail.com",
    },
    {
      id: 2,
      name: "jeonyul",
      email: "jeonyul00@gmail.com",
    },
  ],
};

// 예시 한 번 더, state와 action을 받아와서 어떠한 작업을 할거다
const reducer2 = (state, action) => {
  switch (action.type) {
    case "ex1":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    default:
      return;
  }
};

function UseReducer() {
  // dispatch로 다른곳에서 정의한 reducer을 호출한다
  // useReducer의 0번 인덱스는 다른곳에 정의한 reducer의 이름, 1번 인덱스는 기본값
  // number : 현재 상태
  // dispatch : 액션 발생
  const [number, dispatch] = useReducer(reducer, 0);

  const [state, dispatch2] = useReducer(reducer2, init);
  const ex = () => {
    dispatch({
      type: "add",
    });
  };
  return (
    <div>
      <button reducer={"add"}></button> UseReducer
    </div>
  );
}

export default UseReducer;
