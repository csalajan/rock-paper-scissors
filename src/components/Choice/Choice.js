import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandRock as rock, faHandPaper as paper, faHandScissors as scissor } from "@fortawesome/free-solid-svg-icons";

import './Choice.css';

const icons = {
    rock,
    paper,
    scissor
};

const Choice = ({ lastPlayerChoice, lastComputerChoice, type, handleClick}) => {
    return (
        <div
            className={`choice 
            ${lastPlayerChoice === type ? 'playerChoice' : null} 
            ${lastComputerChoice === type ? 'computerChoice' : null}                
            `}
            onClick={() => handleClick(type)}
        >
            <FontAwesomeIcon
                size="6x"
                icon={icons[type]}
            />
        </div>
    );
}

export default Choice;
