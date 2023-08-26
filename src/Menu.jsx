import { Link } from "react-router-dom";
const React = require("react");

const Menu = ({ title, img, link }) => {
  return (
    <Link
      to={link}
      id="menu"
      style={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.5),rgba(0,0,0,0) 70%
         ),url("${img}" )`,
        backgroundPosition: "top left",
        backgroundSize: "cover",
      }}
    >
      <h3 id="gameTitle">{title}</h3>
      {/* <img src={img} className="gameImg" alt="gameimage"></img> */}
    </Link>
  );
};

export default Menu;
