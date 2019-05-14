import React from 'react';

const Dashboard = props => {

    return (
        <div>
            <h2>Dashboard</h2>
            <button data-testid="ball" onClick={props.gotBall}>Ball</button>
            <button data-testid="hit" onClick={props.gotHit}>Hit</button>
            <button data-testid="strike" onClick={props.gotStrike}>Strike</button>
            <button data-testid="foul" onClick={props.gotFoul}>Foul</button>
        </div>
    )

};
export default Dashboard;