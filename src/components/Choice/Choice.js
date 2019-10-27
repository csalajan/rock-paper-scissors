import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandRock as rock, faHandPaper as paper, faHandScissors as scissor } from "@fortawesome/free-solid-svg-icons";

import './Choice.css';

const icons = {
    rock,
    paper,
    scissor
};

class Choice extends Component {
    render() {
        return (
            <div
                className={`choice 
                ${this.props.lastPlayerChoice === this.props.type ? 'playerChoice' : null} 
                ${this.props.lastComputerChoice === this.props.type ? 'computerChoice' : null}                
                `}
                onClick={() => this.props.handleClick(this.props.type)}
            >
                <FontAwesomeIcon
                    size="6x"
                    icon={icons[this.props.type]}
                />
            </div>
        );
    }
}

export default Choice;
