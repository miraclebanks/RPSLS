import React, { Component } from "react";
import PopUp from "./components/PopUp/PopUp.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import HomeScreen from "./components/HomeScreen/HomeScreen.js";
import GameBoard from './components/GameBoard/GameBoard.tsx'
import './App.css';
import moon from "./moon.png"
import sun from "./sun.png"

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  function toggleColorMode(event) {
    const self = event.target;
    const container = self.parentElement;
    const entireApp = container.parentElement.parentElement.parentElement;
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
            <div className="color-mode" onClick={toggleColorMode}>
            </div>
          </div>
          <img className="color-mode-image" src={sun} />
        </section>
        <section className ='rules-section'>
          <PopUp className='rules-button'>Rules</PopUp>
        </section>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="game" element={<GameBoard />}> </Route>
        </Routes>
      </BrowserRouter>
      <Particles 
      options={{
  "background": {
    
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "mode": "repulse"
      }
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40
      },
      "grab": {
        "distance": 400
      },
      "push": {
        "groups": [
          "z5000",
          "z7500",
          "z2500",
          "z1000"
        ]
      }
    }
  },
  "particles": {
    "color": {
      "animation": {
        "h": {
          "speed": 10
        }
      }
    },
    "groups": {
      "z5000": {
        "number": {
          "value": 70
        },
        "zIndex": {
          "value": 50
        }
      },
      "z7500": {
        "number": {
          "value": 30
        },
        "zIndex": {
          "value": 75
        }
      },
      "z2500": {
        "number": {
          "value": 50
        },
        "zIndex": {
          "value": 25
        }
      },
      "z1000": {
        "number": {
          "value": 40
        },
        "zIndex": {
          "value": 10
        }
      }
    },
    "links": {
      "color": {
        "value": "#ffffff"
      },
      "opacity": 0.4
    },
    "move": {
      "angle": {
        "value": 10
      },
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "direction": "right",
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "speed": 5
    },
    "number": {
      "value": 10
    },
    "opacity": {
      "animation": {
        "speed": 3,
        "minimumValue": 0.1
      }
    },
    "zIndex": {
      "value": 5,
      "opacityRate": 0.5
    }
  },
  "emitters": {
    "autoPlay": true,
    "fill": true,
    "life": {
      "wait": false
    },
    "rate": {
      "quantity": 1,
      "delay": 7
    },
    "shape": "square",
    "startCount": 0,
    "size": {
      "mode": "percent",
      "height": 0,
      "width": 0
    },
    "particles": {
      "shape": {
        "type": "images",
        "options": {
          "images": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/TBBT_logo.svg/828px-TBBT_logo.svg.png",
            "width": 500,
            "height": 634
          }
        }
      },
      "size": {
        "value": 80
      },
      "move": {
        "speed": 15,
        "outModes": {
          "default": "none",
          "right": "destroy"
        },
        "straight": true
      },
      "zIndex": {
        "value": 15
      },
      "rotate": {
        "value": {
          "min": 0,
          "max": 360
        },
        "animation": {
          "enable": true,
          "speed": 10,
          "sync": true
        }
      }
    },
    "position": {
      "x": -5,
      "y": 90
    }
  }
}}/>
    </div>

  );

}


export default App;
