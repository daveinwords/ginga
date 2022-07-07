import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../assets/particlesConfig.json";

function App() {
  return (
    <>
      <Particles params={particlesConfig} className="App-particles__container" />
      <div className="App">
        <div className="App-text">
          <h1 className="App-text__title">Pathetic Geek</h1>
          <h2 className="App-text__body">
            I am a full stack web and mobile developer
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
