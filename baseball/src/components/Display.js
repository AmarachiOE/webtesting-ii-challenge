import React from "react";

const Display = props => {
  return (
    <div className="display-container">
      <h2>Score Board</h2>
      <h4>Balls: {props.ballsCount}</h4>
      <h4>Strikes: {props.strikesCount}</h4>
    </div>
  );
};
export default Display;
