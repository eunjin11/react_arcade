import { Link } from "react-router-dom";
const React = require("react");

const Menu = ({ title, img, link }) => {
  return (
    <Link to={link} id="menu">
      <div>
        <div>이미지 넣기{img}</div>
        <h3>제목: {title}</h3>
        <div>링크: {link}</div>
      </div>
    </Link>
  );
};

export default Menu;
