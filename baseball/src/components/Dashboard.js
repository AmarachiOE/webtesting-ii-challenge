import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={props.gotBall}>Ball</button>
      <button onClick={props.gotHit}>Hit</button>
      <button onClick={props.gotStrike}>Strike</button>
      <button onClick={props.gotFoul}>Foul</button>
    </div>
  );
};
export default Dashboard;
