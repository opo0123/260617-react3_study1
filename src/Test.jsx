function Test() {
  function hello() {
    alert("안녕하세요");
  }
  /* 함수가 값을 반환하는 경우 */
  function getName() {
    return "이아영";
  }
  return (
    <>
      {/* 함수가 값을 반환하는 경우 */}
      <h1>{getName()}</h1>
      <h2>React 기본 함수</h2>
      <button onClick={hello}>Click</button>
    </>
  );
}
export default Test;
