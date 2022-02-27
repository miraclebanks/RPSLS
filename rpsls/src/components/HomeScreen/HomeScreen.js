import React from 'react';
import './styles/main.css';
import logo from "./RPSLS.png"
import {Link} from 'react-router-dom';



export default function HomeScreen() {
  return (
    <div>
           <header className="Home-header">
      
        <div className='content-container'>
          <div className='content'>
            <h1>
              <span className="rock">Rock</span>,
              <span className="paper"> Paper</span>,
              <span className="scissors"> Scissors</span>, <br></br>
              <span className="lizard"> Lizard</span>,
              <span className="spock"> Spock</span>
            </h1>
            <img src={logo} className="App-logo" alt="logo" />
            <Link to='/game' className='link'> Start</Link>
          </div>
        </div>
      </header>
    </div>
  )
}
