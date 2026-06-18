import { useState } from "react";

function Ex_01() {
  // js
  const [emoji, setEmoji] = useState("🙄");
  // 이모지 변경 함수
  function changeEmoji() {
    setEmoji("🤪");
  }
  function toggleEmoji() {
    // 삼항 연산자 = if/else
    setEmoji(emoji === "🙄" ? "🤓" : "🙄");
  }

  // 입력창 값 출력 함수
  // 상태변수(name) 생성, 초기값을 빈 문자열로
  // setName: name 상태를 바꾸는 함수
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <hr />
      <p>지금 기분: {emoji}</p>
      <button onClick={changeEmoji}>변경</button>
      <button onClick={toggleEmoji}>변경 - 토글</button>

      {/* 입력창 값 출력 */}
      <input
        style={{
          display: "block",
          marginTop: "20px",
          padding: "5px 10px",
          borderRadius: "10px",
          border: "1px solid #585858",
        }}
        type="text"
        placeholder="이름을 입력하세요."
        // 입력창 값 = name 상태 -> 양방향 바인딩
        value={name}
        // 입력창 값 바꾸기
        onChange={handleChange}
      />
      <p><strong>{name  || "..."}</strong>님, 안녕하세요!</p>
    </>
  );
}
export default Ex_01;
