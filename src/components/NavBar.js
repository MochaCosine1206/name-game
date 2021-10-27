import React from "react";
import logo from "../theNameGameLogo.svg";
import chevron from "../chevron.svg"

import "../styles/NavBar.css";

const NavBar = ({ changeGameMode }) => {

  return (
    <nav>
      <div className="chevron" style={{backgroundImage: `url(${chevron})`}} onClick={e => changeGameMode({ gameMode: "selectionScreen" })} alt="button to return to start screen"></div>
      <img src={logo} alt="The Name Game Logo"></img>
      <div></div>
    </nav>
  );
};

export default NavBar;
