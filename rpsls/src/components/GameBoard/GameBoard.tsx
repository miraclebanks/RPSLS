import { useState, useEffect } from 'react';
import './styles/GameBoard.css';


function GameBoard() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);

  const userClick = (userSelection) => {
    setUserChoice(userSelection)
  }

  return (

    <section className="gameBoard">
      <div className='scoreBoard'><h4>Score</h4> </div>
      <div className='gamePieces'>
        <div className="paper" onClick={() => userClick('paper')}>paper</div>
        <div className="scissors" onClick={() => userClick('scissors')}>scissors</div>
        <div className="rock" onClick={() => userClick('rock')}>rock</div>
        <div className="lizard" onClick={() => userClick('lizard')}>lizard</div>
        <div className="spock" onClick={() => userClick('spock')}>spock</div>
        {/* <div className="kirby"></div> */}
        {/* <div><img src=''/></div> */}
      </div>
    </section>

  )
}

export default GameBoard;