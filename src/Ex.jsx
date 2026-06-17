import { useState } from "react";

function Ex() {
  // 함수가 값을 반환하는 경우
  function getName() {
    return "안녕~";
  }
  // 함수에 매개변수 전달
  function greet(name) {
    alert(`${name}님 환영합니다!`);
  }
  // useState 함수 - 클릭 시 숫자 증가/감소
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  // const [name, setName] = useState("ㅇㅇㅇ"); 숫자 말고도 가능

  // 좋아요 버튼 (클릭 시 카운트)
  const [like, setLike] = useState(0);
  function plusLike() {
    setLike(like + 1);
  }

  // 배열 출력
  const menus = ["HTML", "CSS", "JS", "React"];

  return (
    <>
      <h1>{getName()}</h1>
      {/* 함수에 매개변수 전달 */}
      <button onClick={() => greet("김ㅇㅇ")}>인사하기</button>
      <button onClick={() => greet("이ㅇㅇ")}>인사하기</button>

      {/* useState 함수 */}
      <h2>{count}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>

      {/* 좋아요 버튼 (클릭 시 카운트)*/}
      <p>💜{like}</p>
      <button onClick={plusLike}>🤍</button>

      {/* 배열 출력 */}
      <ul>
        {menus.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}
      </ul>
    </>
  );
}
export default Ex;
