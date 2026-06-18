import { useState } from "react";

function Name() {
  const [inputName, setInputName] = useState(""); // 입력창에 쓰는 값
  const [saveName, setSaveName] = useState(""); // 저장 값

  function handleChange(e) {
    setInputName(e.target.value);
  }
  // 저장 버튼 클릭 시
  function handleSave() {
    setSaveName(inputName);
    setInputName(""); // 저장 누르면 입력창 값은 삭제
  }
  return (
    <>
      <h1>이름 저장하기</h1>
      <input
        type="text"
        placeholder="이름 입력"
        value={inputName}
        onChange={handleChange}
      />

      {/* 입력 값 저장 버튼 */}
      <button onClick={handleSave}>저장</button>

      {/* 저장 값 출력 */}
      {/* <p>{"No Name" || `Hi, ${saveName}~`}</p> */}
      <p>{saveName ? `Hi, ${saveName}~` : `No Name`}</p>
    </>
  );
}
export default Name;
