const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("끝말잇기 시작");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputEl.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputEl.current.focus();
    }
  };

  return (
    <div className="game_box">
      <h2>끝말잇기 게임</h2>

      {/* <label>글자를 입력하세요.</label> */}

      <h3>{word}</h3>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </div>
  );
};

export default WordRelay;
