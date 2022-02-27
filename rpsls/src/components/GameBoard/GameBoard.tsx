import React from 'react'
import './styles/GameBoard.css';

function GameBoard() {
  return (

    <section className="gameBoard">
      <h1>Gameboard</h1>
      <div className='gamePieces'>
        <div className="paper"></div>
        <div className="scissors"></div>
        <div className="rock"></div>
        <div className="lizard"></div>
        <div className="spock"></div>
        {/* <div className="kirby"></div> */}
      </div>
    </section>

  )
}

export default GameBoard;