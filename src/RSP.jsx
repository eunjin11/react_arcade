import React, { useState, useRef, useEffect } from "react";

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

const RSP = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {
    // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    console.log("다시 실행");
    interval.current = setInterval(changeHand, 100);
    return () => {
      // componentWillUnmount 역할
      console.log("종료");
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = (choice) => () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult("비겼습니다!");
      } else if ([-1, 2].includes(diff)) {
        setResult("이겼습니다!");
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult("졌습니다!");
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        interval.current = setInterval(changeHand, 100);
      }, 1000);
    }
  };

  return (
    <div className="game_box">
      <h2>가위바위보 게임</h2>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      />
      <h2>
        <button className="rspBtn" onClick={onClickBtn("바위")}>
          ✊
        </button>
        <button className="rspBtn" onClick={onClickBtn("가위")}>
          ✌️
        </button>
        <button className="rspBtn" onClick={onClickBtn("보")}>
          ✋
        </button>
      </h2>
      <div id="result">{result}</div>
      <div id="result">현재 {score}점</div>
    </div>
  );
};

export default RSP;
