import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./index.css";
//import App from "./App";

import Menu from "./Menu";
import GuGuDan from "./GuGuDan";

import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import githubLogo from "./github-mark.svg";
import notionLogo from "./notion.svg";

function App() {
  return (
    <div>
      <div className="logo-box">
        <a
          href="https://github.com/eunjin11"
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
        <Route path="/topics" element={<Topics></Topics>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/gugudan" element={<GuGuDan></GuGuDan>}></Route>
        <Route path="/*" element={"Not found"}></Route>
      </Routes>
    </div>
  );
}
const gameList = [
  { title: "끝말잇기", img: "링크", link: "/" },
  { title: "구구단", img: "링크", link: "/gugudan" },
  { title: "숫자 야구 게임", img: "링크", link: "/gugudan" },
  { title: "반응 속도 게임", img: "링크", link: "/" },
  { title: "가위바위보", img: "링크", link: "/" },
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

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
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
