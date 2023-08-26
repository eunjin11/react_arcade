import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./index.css";
//import App from "./App";

import Menu from "./Menu";
import GuGuDan from "./GuGuDan";
import WordRelay from "./WordRelay";
import RSP from "./RSP";
import ResponseCheck from "./ResponseCheck";
import Lotto from "./Lotto";

import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import githubLogo from "./github-mark.svg";
import notionLogo from "./notion.svg";

import wordRelayimg from "./wordRelay.png";
import RSPimg from "./RSP.png";
import ResponseCheckimg from "./ResponseCheck.png";
import gugudanimg from "./gugudan.png";
import lottoimg from "./lotto.png";

function App() {
  return (
    <div>
      <div className="logo-box">
        <a
          href="https://github.com/eunjin11/react_arcade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} className="App-logo" alt="github link" />
        </a>
        <a
          href="https://www.notion.so/8ceb0f5cc96b419db761dd79511dde72"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={notionLogo} className="App-logo" alt="notion link" />
        </a>
      </div>

      <h1>
        <Link to="/">🎮 리액트 오락관 🕹️</Link>
      </h1>
      <hr></hr>
      <div className="text">
        <div>
          2023 하계 모각소에서 리액트를 공부하며 만든 웹게임 사이트입니다.
        </div>
        <div>제로초님의 리액트 웹게임 강의를 수강하며 제작했습니다.</div>
        <div>
          <Link to="/">🎮 리액트 오락관 🕹️</Link>을 클릭하면 메인 페이지로
          돌아갑니다.
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/wordrelay" element={<WordRelay></WordRelay>}></Route>
        <Route path="/gugudan" element={<GuGuDan></GuGuDan>}></Route>
        <Route path="/rsp" element={<RSP></RSP>}></Route>
        <Route
          path="/responsecheck"
          element={<ResponseCheck></ResponseCheck>}
        ></Route>
        <Route path="/lotto" element={<Lotto></Lotto>}></Route>
        <Route path="/*" element={"Not found"}></Route>
      </Routes>
    </div>
  );
}
const gameList = [
  { title: "끝말잇기", img: wordRelayimg, link: "/wordrelay" },
  { title: "구구단", img: gugudanimg, link: "/gugudan" },
  { title: "로또 숫자 뽑기", img: lottoimg, link: "/lotto" },
  { title: "반응 속도 게임", img: ResponseCheckimg, link: "/responsecheck" },
  { title: "가위바위보", img: RSPimg, link: "/rsp" },
];

function Home() {
  return (
    <div>
      <div className="container">
        {gameList.map((gameList) => (
          <Menu
            title={gameList.title}
            img={gameList.img}
            link={gameList.link}
          />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
