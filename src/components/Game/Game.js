import React, {Component} from 'react';
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

class Game extends Component {
    state = {
        lastOutcome: "",
        lastPlayerChoice: "",
        lastComputerChoice: "",
        playerScore: 0,
        computerScore: 0,
    };

    onPlayerChoiceSelect = (playersChoice) => {
        const computerChoice = this.generateComputerChoice();
        const winner = this.calculateWinner(playersChoice, computerChoice);

        const newState = {
            lastPlayerChoice: playersChoice,
            lastComputerChoice: computerChoice,
        };

        if (winner === 1) {
            newState.lastOutcome = "Player Wins";
            newState.playerScore = this.state.playerScore + 1;
        }

        if (winner === 0) {
            newState.lastOutcome = "Tie";
        }

        if (winner === -1) {
            newState.lastOutcome = "Rival Wins";
            newState.computerScore = this.state.computerScore + 1;
        }

        this.setState(newState);
    };

    generateComputerChoice = () => {
        const choice = Math.floor((Math.random() * choices.length));
        return choices[choice];
    };

    calculateWinner(playerChoice, computerChoice) {
        return (map[playerChoice][computerChoice]);
    };

    render() {
        return (
            <div className="game">
                <Scoreboard
                    playerScore={this.state.playerScore}
                    computerScore={this.state.computerScore}
                />

                {
                    this.state.lastOutcome &&
                        <div className="last-outcome">
                            {this.state.lastOutcome}
                        </div>
                }
                <Choices
                    lastPlayerChoice={this.state.lastPlayerChoice}
                    lastComputerChoice={this.state.lastComputerChoice}
                    onPlayerChoiceSelect={this.onPlayerChoiceSelect}
                />
            </div>
        );
    }
}

export default Game;
