import { useState } from "react";

function SelectBox() {
  const [fruit, setFruit] = useState("");
  const [agree, setAgree] = useState(false); //
  function handleChange(e) {
    // e.target.value: 사용자가 선택한 값을 가져옴
    setFruit(e.target.value);
  }
  // 체크박스
  function handleCheckBox(e) {
    setAgree(e.target.checked);
  }

  return (
    <>
      <div style={{ padding: "20px", backgroundColor: "aliceblue" }}>
        <select onChange={handleChange}>
          <option value="">과일 선택</option>
          <option value="사과">🍎</option>
          <option value="수박">🍉</option>
          <option value="포도">🍇</option>
          <option value="바나나">🍌</option>
        </select>
        <h3>선택한 과일 : {fruit}</h3>
      </div>
      <hr />
      <div style={{ padding: "20px", backgroundColor: "#f9ffe3" }}>
        <label>
          <input type="checkbox" checked={agree} onChange={handleCheckBox} />{" "}
          약관에 동의합니다.
        </label>
        <p>{agree ? "✅ 완료" : "❌ 미완료"}</p>
      </div>
    </>
  );
}
export default SelectBox;
