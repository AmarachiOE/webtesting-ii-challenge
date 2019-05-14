import React from 'react';

const Display = props => {


    return (
        <div>
            <h2>Display Component</h2>
            <h4>Balls: {props.ballsCount}</h4>
            <h4>Strikes: {props.strikesCount}</h4>
        </div>
    )

};
export default Display;