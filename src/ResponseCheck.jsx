import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  Component,
} from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요");
  const [result, setResult] = useState([]);

  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div id="result">
          평균시간: {result.reduce((a, c) => a + c) / result.length}ms
        </div>
        <button onClick={onReset}>리셋 </button>
      </>
    );
  };

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요");
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");

        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      //성급하게 클릭
      clearTimeout(timeout.current);
      setState("waiting");
      setMessage("너무 성급하시군요! 초록색이 된 후에 클릭하세요.");
    } else if (state === "now") {
      //반응속도 체크
      endTime.current = new Date();

      setState("waiting");
      setMessage("클릭해서 시작하세요");
      setResult((prevState) => {
        return [...prevState, endTime.current - startTime.current];
      });
    }
  };

  return (
    <div className="game_box">
      <h2>반응속도 게임</h2>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      <div>{renderAverage()}</div>
    </div>
  );
};

export default ResponseCheck;
