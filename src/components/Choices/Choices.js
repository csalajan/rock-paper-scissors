import React from 'react';
import {Choice} from "../index";

import './Choices.css';

const choices = [
    "rock",
    "paper",
    "scissor"
];

const Choices = ({ lastPlayerChoice, lastComputerChoice, onPlayerChoiceSelect }) => {
    return (
        <div className="choices">
            {
                choices.map((choice, index) =>
                    <Choice
                        key={index}
                        lastPlayerChoice={lastPlayerChoice}
                        lastComputerChoice={lastComputerChoice}
                        type={choice}
                        handleClick={onPlayerChoiceSelect}
                    />
                )
            }
        </div>
    );
}


export default Choices;
