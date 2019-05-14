import React from 'react';

// Components
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Display/>
      <Dashboard/>
    </div>
  );
}

export default App;
