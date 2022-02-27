import logo from './RPSLS.png';
import './App.css';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <div class="color-mode-container"><div class="color-mode"></div></div>
        <div class='content'>
          <h1>
            <span class="rock">Rock</span>,
            <span class="paper">Paper</span>,
            <span class="scissors">Scissors</span>, <br></br>
            <span class="lizard">Lizard</span>,
            <span class="spock">Spock</span>
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          </div >
      </header>
    </div>
    
  );
}

export default App;
