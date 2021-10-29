import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello I'm learning React.</p>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
