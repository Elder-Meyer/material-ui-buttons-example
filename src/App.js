import React from "react";
import { ExampleButtons } from "./components/ExampleButtons/ExampleButtons";
import './App.css'
import { GridElder } from "./components/GridElder";

function App() {
  return (
    <div className="App">
      <h1>Elementos de material UI</h1>

      <div className="content">
        <ExampleButtons/>
        
        <GridElder/>
      </div>
    </div>
  );
}

export default App;
