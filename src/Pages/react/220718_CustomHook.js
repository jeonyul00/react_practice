import React, { useCallback, useState } from "react";

// 컴포넌트를 만들다 보면 반복되는 로직이 자주 발생한다
// 그냥 훅을 만들면 된다
// initialForm 해당 인풋 폼에서 관리할 초기값

// 이렇게 만들어서 내보낸다 => 다른 컴포넌트에서 불러와서 쓴다
function useYul(initialForm) {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  // 객체 형태 또는 배열 형태로 내보내면 됨
  return [form, onChange, reset];
}
export default useYul;

function CustomHook() {
  const [form, onChange, react] = useYul({
    name: "",
    value: "",
  });

  return <div>CustomHook</div>;
}
