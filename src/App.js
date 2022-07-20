import { useCallback, useMemo, useRef, useState } from "react";
import Array from "./Pages/javascript/220702_Array";
import Conditionals from "./Pages/javascript/220702_Conditionals";
import ConstAndLet from "./Pages/javascript/220702_ConstAndLet";
import DataType from "./Pages/javascript/220702_DataType";
import Function from "./Pages/javascript/220702_Function";
import Object from "./Pages/javascript/220702_Object";
import UseOnlyJavascript from "./Pages/javascript/220702_UseOnlyJavascript";
import CSS from "./Pages/javascript/220703_CSS";
import CSSInJavascript from "./Pages/javascript/220703_CSSInJavascript";
import DocumentObject from "./Pages/javascript/220703_DocumentObject";
import Window from "./Pages/javascript/220703_Window";
import LoginInput from "./Pages/javascript/220708_LoginInput";
import Time from "./Pages/javascript/220708_Time";
import ArrayRandering from "./Pages/react/220714_ArrayRandering";
import Input from "./Pages/react/220714_Input";
import JSX from "./Pages/react/220714_JSX";
import Props, { Wrapper } from "./Pages/react/220714_Props";
import Props2 from "./Pages/react/220714_Props";
import UseEffect from "./Pages/react/220714_UseEffect";
import UseMemo from "./Pages/react/220714_UseMemo";
import UseRef from "./Pages/react/220714_UseRef";
import UseState from "./Pages/react/220714_UseState";
import ArrayData from "./Pages/react/220718_ArrayData";
import ArrayDetail from "./Pages/react/220718_ArrayDetail";
import Context from "./Pages/react/220718_Context";

function App() {
  const focus = useRef();
  // 더미 데이터
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "jeonyul",
      email: "jeonyul00@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "kimbongda",
      email: "bongdas@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "kimyunji",
      email: "WeMB@daum.com",
      active: false,
    },
    {
      id: 4,
      username: "kimeunhee",
      email: "heeheehee@gamil.com",
      active: false,
    },
  ]);

  // 초기값 선언
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  // 구조 분해 할당으로 값을 미리 빼온다
  const { username, email } = inputs;

  // index 값 설정
  const nextId = useRef(users.length + 1);
  console.log(nextId);

  // 함수 선언
  // useCallback : 함수 재사용 : inputs가 바뀔때만 호출 함
  const onChange = useCallback(
    (e) => {
      // 여러 인풋 관리할 때 쓰이는데 이거 좀 헷갈린다, 구조분해 할당의 개념을 같이 써서 그런가
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // setUsers([...users, user]); // 가존의 배열을 복사해서 넣은 후 그 다음에 새로운 항목을 넣음, 근데 이거 불편
    setUsers(users.concat(user)); // concat : 새로운 배열을 만들어서 그 안에 user을 넣어줌

    // 후에 초기화
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current); // 5
    nextId.current += 1;
    // focus
    focus.current.focus();
  }, [users, username, email]);

  const onRemove = useCallback(
    (id) => {
      // 만족하는 값을 새로운 배열로 만든다 : true인 값만
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  // 특정 인덱스값을 업데이트 할 때도 map 사용 가능
  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id
            ? {
                ...user,
                active: !user.active,
              }
            : user
        )
      );
    },
    [users]
  );

  function conuntActiveUsers() {
    console.log("활성 유저 세는중");
    return users.filter((user) => user.active).length;
  }

  // useMemo : 결과값 재사용
  const count = useMemo(() => {
    conuntActiveUsers(users);
  }, [users]);

  return (
    <>
      <ArrayDetail
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        focus={focus}
      />
      <p>활성 사용자 수 : {count}</p>
      <ArrayData users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
