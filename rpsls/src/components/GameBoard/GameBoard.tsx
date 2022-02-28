import { useState } from 'react';
import { gameResults, getRandomComputerChoice, handleResult } from '../../backend/gameLogic';
import './styles/GameBoard.css';


function GameBoard() {
  let [userScore, setUserScore] = useState(0);
  let [computerScore, setComputerScore] = useState(0);
  let [tie, setTie] = useState(0);
  const userClick = (userSelection) => {
    let computerSelection = getRandomComputerChoice();
    handleResult(gameResults(userSelection, computerSelection));
    switch(gameResults(userSelection,computerSelection)){
      case 'Win':
        userScore++;
        setUserScore(userScore);
        break;
        case 'Tie':
          tie++;
          setTie(tie);  
        break;
      case 'Lose':
        computerScore++;
        setComputerScore(computerScore);  
      break;
      default:
        break;
    }
  }

  return (

    <section className="gameBoard">
      <div className='scoreBoard'><h4>Score</h4> 
      <br/>
      {userScore}:{tie}:{computerScore}
      </div>
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