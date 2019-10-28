import React, { useState } from 'react';
import {Choices, Scoreboard} from "../index";

import './Game.css';

const choices = [
    "rock",
    "paper",
    "scissor"
];

const map = {};

choices.forEach((choice, i) => {
    map[choice] = {};
    map[choice][choice] = 0;
    map[choice][choices[(i+1)%3]] = -1;
    map[choice][choices[(i+2)%3]] = 1;
});

const Game = () => {
    const [ lastOutcome, updateLastOutcome ] = useState("");
    const [ lastPlayerChoice, updateLastPlayerChoice ] = useState("");
    const [ lastComputerChoice, updateLastComputerChoice ] = useState("");
    const [ playerScore, updatePlayerScore ] = useState(0);
    const [ computerScore, updateComputerScore ] = useState(0);

    const onPlayerChoiceSelect = (playersChoice) => {
        const computerChoice = generateComputerChoice();
        const winner = calculateWinner(playersChoice, computerChoice);

        updateLastPlayerChoice(playersChoice);
        updateLastComputerChoice(computerChoice);

        if (winner === 1) {
            updateLastOutcome("Player Wins");
            updatePlayerScore(playerScore + 1);
        }

        if (winner === 0) {
            updateLastOutcome("Tie");
        }

        if (winner === -1) {
            updateLastOutcome("Rival Wins");
            updateComputerScore(computerScore + 1);
        }
    };

    const generateComputerChoice = () => {
        const choice = Math.floor((Math.random() * choices.length));
        return choices[choice];
    };

    const calculateWinner = (playerChoice, computerChoice) => {
        return (map[playerChoice][computerChoice]);
    };

    return (
        <div className="game">
            <Scoreboard
                playerScore={playerScore}
                computerScore={computerScore}
            />

            {
                lastOutcome &&
                <div className="last-outcome">
                    {lastOutcome}
                </div>
            }
            <Choices
                lastPlayerChoice={lastPlayerChoice}
                lastComputerChoice={lastComputerChoice}
                onPlayerChoiceSelect={onPlayerChoiceSelect}
            />
        </div>
    )
};

export default Game;
