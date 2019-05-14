import React from "react";

// Components
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import "./App.css";

class App extends React.Component {
  state = {
    ballsCount: 0,
    strikesCount: 0
  };

  // Methods
  gotBall = e => {
    e.preventDefault();
    this.setState(prevState => {

      const newBallsCount = prevState.ballsCount === 3 ? 0 : prevState.ballsCount + 1;
      return {
        ballsCount: newBallsCount
      };
    });
  };

  gotHit = e => {
    e.preventDefault();
    this.setState({ ballsCount: 0, strikesCount: 0 })
  };

  gotStrike = e => {
    e.preventDefault();
    this.setState(prevState => {
      const newStrikesCount = prevState.strikesCount === 2 ? 0 : prevState.strikesCount + 1;

      return {
        strikesCount: newStrikesCount
      };
    });
  };

  gotFoul = e => {
    e.preventDefault();

    this.setState(prevState => {
      const newStrikesCount = prevState.strikesCount < 2 ? prevState.strikesCount + 1 : prevState.strikesCount;
      
      return {
        strikesCount: newStrikesCount
      }

    })
  };

  render() {
    return (
      <div className="App">
        <h1>Baseball Web Testing II </h1>
        <Display
          ballsCount={this.state.ballsCount}
          strikesCount={this.state.strikesCount}
        />
        <Dashboard
          gotBall={this.gotBall}
          gotHit={this.gotHit}
          gotStrike={this.gotStrike}
          gotFoul={this.gotFoul}
        />
      </div>
    );
  }
}

export default App;
