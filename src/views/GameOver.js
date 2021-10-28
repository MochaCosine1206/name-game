import React from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";

import "../styles/GameOver.css";

const GameOver = ({ gameMode }) => {
  return (
    <div>
      <NavBar gameMode={gameMode} />
      <section className="upperSection"></section>
      <section className="lowerSection">
        <Button
          disabled={false}
        //   onClick={e => changeGameMode({ gameMode: "normal" })}
        >
          Return to Home
        </Button>
      </section>
    </div>
  );
};

export default GameOver;
