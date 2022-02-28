import { useState } from 'react';
import { gameResults, getRandomComputerChoice, handleResult } from '../../backend/gameLogic';
import './styles/GameBoard.css';


function GameBoard(props) {
  let {showBoard} = props;
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
      <div className='gamePieces' style={{display: showBoard ? 'flex' :'none'}}>
        <div className="paper" style={{display: showBoard ? 'flex' :'none'}} onClick={() => userClick('paper')}>paper</div>
        <div className="scissors" style={{display: showBoard ? 'flex' :'none'}} onClick={() => userClick('scissors')}>scissors</div>
        <div className="rock" style={{display: showBoard ? 'flex' :'none'}} onClick={() => userClick('rock')}>rock</div>
        <div className="lizard" style={{display: showBoard ? 'flex' :'none'}} onClick={() => userClick('lizard')}>lizard</div>
        <div className="spock" style={{display: showBoard ? 'flex' :'none'}} onClick={() => userClick('spock')}>spock</div>
        {/* <div className="kirby"></div> */}
        {/* <div><img src=''/></div> */}
      </div>
    </section>

  )
}

export default GameBoard;