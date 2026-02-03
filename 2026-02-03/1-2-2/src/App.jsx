import img from "./assets/profile/profile1.png";
import { useState } from "react";

export default function App() {
  console.log("렌더링!");

  const name = "이해랑";
  const birthYear = 2001;
  const currentYear = 2026;
  const age = currentYear - birthYear;
  const hobbies = ["멍 떄리기", "음악", "책 읽기"];
  const mbti = "INTJ";
  const [hovered, setHover] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: "12px",
          margin: "100px auto",
          width: "300px",
          borderRadius: "10px",
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          textAlign: "center",
          cursor: "pointer",

          transition: "transform 0.35s ease",

          transform: hovered ? "scale(1.02)" : "scale(1)",
        }}
      >
        <h3
          style={{
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 24px rgba(82, 76, 105, 0.25)",
            color: "#d9e1f0ff",
            textShadow: "0 2px 6px rgba(0, 0, 0, 1)",
          }}
        >
          {name}
        </h3>
        <div
          style={{
            border: "1px solid #0b1220",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
            borderRadius: "13px",
            backgroundColor: hovered
              ? "rgba(255, 255, 255, 0.3)"
              : "rgba(255, 255, 255, 0.15)",
            color: "#d9e1f0ff",
          }}
        >
          <p>나이 : {age}</p>
          <p>취미 : {hobbies.join(", ")}</p>
          <p>MBTI : {mbti}</p>
        </div>
      </div>
    </>

    // <>
    //   <h1 className="title">Hello JSX</h1>
    //   <p className="desc">React 시작하기</p>
    // </>

    // <>
    //   <input type="text" />
    //   <br />

    //   <button onClick={alert}>클릭</button>
    // </>

    // <>
    //   <h1>학생 정보</h1>
    //   <p>이름 : {name}</p>
    //   <p>점수 : {score}점</p>

    //   <p>결과 : {score + 10 >= 90 ? "합격" : "불합격"}</p>
    // </>

    // <>
    //   <h1
    //     style={{
    //       color: "orange",
    //       backgroundColor: "black",
    //       padding: "15px",
    //     }}
    //   >
    //     멋진 제목
    //   </h1>
    //   <p style={{ fontSize: "24px" }}>글자가 커졌어요!!</p>
    // </>
  );
}
