import React from "react";
import produce from "immer";

// 불변성 지키기
function Immer() {
  const object = {
    a: 1,
    b: 2,
  };

  // 수정 시 복사 후 값을 변경해야 한다, 직접 수정을 하면 안된다 왜냐면 랜더링이 안될 수 있기 떄문이지
  const nexValue = {
    ...object,
    b: 3,
  };

  // 근데 이게 되게 불편한 상황이 올 수 있다 그럴 때 Immmer를 쓴다 , 불변성을 해치는 코드를 작성해도 대신 불변성을 유지해준다

  // ---------------------------------------------------------------

  const state = {
    number: 1,
    dontChangeMe: 2,
  };
  // 0번 인덱스 : 바꿔주고싶은 객체
  // 1번 인덱스 : 어떻게 바꿀지 알려주는 함수
  const nextState = produce(state, (draft) => {
    draft.number += 1;
  });

  return <div>Immer</div>;
}

export default Immer;
