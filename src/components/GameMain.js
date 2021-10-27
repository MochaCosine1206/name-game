import React, { useContext } from "react";
import { Context as DataContext } from "../context/gameContext";
import GameSelect from "../views/GameSelect";
import GameNormal from "../views/GameNormal"


const GameMain = () => {
  const { state, changeGameMode } = useContext(DataContext);
  const { gameMode } = state;
  const GameController = ({ gameMode }) => {
    switch (gameMode) {
      case "selectionScreen":
        return <GameSelect />;
      case "normal":
        return (<GameNormal changeGameMode={changeGameMode}/>);
      default:
        return ("No Mode")
    }
  };



  return (
    <div>
      <GameController gameMode={gameMode} />
    </div>
  );
};

export default GameMain;
