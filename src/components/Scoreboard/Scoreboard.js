import React from 'react';
import './Scoreboard.css';

const Scoreboard = ({ playerScore, computerScore }) => {
    return (
        <div className="scoreboard">
            <div className={`you ${playerScore > computerScore ? 'winning' : ''}`}>You</div>
            <div className="score">
                <span>{playerScore}</span>
                <span>:</span>
                <span>{computerScore}</span>
            </div>
            <div className={`rival ${playerScore < computerScore ? 'winning' : ''}`}>Rival</div>
        </div>
    );
};

export default Scoreboard;
