import React, { useEffect, useContext } from 'react';
import { Context as DataContext } from '../context/gameContext'
import Button from '../components/Button';
import hero from '../hero.svg'

import "../styles/GameSelectStyles.css"


const GameSelect = () => {
    const { state, changeGameMode } = useContext(DataContext);
  
    return (
        <div className="selectionScreen">
            <img src={hero} alt="The Name Game Logo" />
            <h3>Try Matching the WillowTree employee to their photo.</h3>
            <Button disabled={false} onClick={e => changeGameMode({ gameMode: "normal" })}>Play</Button>
        </div>
    )
}

export default GameSelect;