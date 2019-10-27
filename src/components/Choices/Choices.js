import React, {Component} from 'react';
import {Choice} from "../index";

import './Choices.css';

const choices = [
    "rock",
    "paper",
    "scissor"
];

class Choices extends Component {

    handleSelection = (type) => {
       this.props.onPlayerChoiceSelect(type);
    };

    render() {
        return (
            <div className="choices">
                {
                    choices.map((choice, index) =>
                        <Choice
                            key={index}
                            lastPlayerChoice={this.props.lastPlayerChoice}
                            lastComputerChoice={this.props.lastComputerChoice}
                            type={choice}
                            handleClick={this.handleSelection}
                        />
                    )
                }
            </div>
        );
    }
}

export default Choices;
