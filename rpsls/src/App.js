// import { ReactDOM } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen.js";
import GameBoard from './components/GameBoard/GameBoard.tsx'
import './App.css';
import moon from "./moon.png"
import sun from "./sun.png"

function App() {

  function toggleColorMode(event) {
    const self = event.target;
    const container = self.parentElement;
    const entireApp = container.parentElement.parentElement;
    if (self.classList.contains('light-mode')) {
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
        <section className="color-mode-section">
          <img className="color-mode-image" src={moon} />
          <div className="color-mode-container">
            <div className="color-mode" onClick={toggleColorMode}></div></div>
          <img className="color-mode-image" src={sun} />
        </section>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Test/>}/>
        <Route path="404" element={<Page404/>}/> */}
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="game" element={<GameBoard />}> </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>

  );

}


export default App;
