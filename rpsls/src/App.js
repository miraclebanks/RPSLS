import logo from './RPSLS.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span class="rock">Rock</span>,
          <span class="paper">Paper</span>,
          <span class="scissors">Scissors</span>, <br></br>
          <span class="lizard">Lizard</span>,
          <span class="spock">Spock</span>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
