import logo from './RPSLS.png';
import './App.css';

function App() {
  
  function toggleColorMode(event){ 
    const self = event.target;
    const container = self.parentElement;
    const entireApp = container.parentElement;
    if ( self.classList.contains('light-mode') ) { 
      self.classList.remove('light-mode');
      container.classList.remove('light-mode-container');
      entireApp.classList.remove('app-light-mode');
    } else { 
      self.classList.add('light-mode');
      container.classList.add('light-mode-container');
      entireApp.classList.add('app-light-mode');
    }
    
  }

  return (
    <div className="App">

      <header className="App-header">
        <div className="color-mode-container">
          <div className="color-mode" onClick={toggleColorMode}></div></div>
        <div className='content'>
          <h1>
            <span className="rock">Rock</span>,
            <span className="paper">Paper</span>,
            <span className="scissors">Scissors</span>, <br></br>
            <span className="lizard">Lizard</span>,
            <span className="spock">Spock</span>
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          </div >
      </header>
    </div>
    
  );
  
}


export default App;
