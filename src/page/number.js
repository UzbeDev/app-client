import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
//rccp
class Number extends Component {

    state={
        number:0
}


    render() {
        const plus = () => {
            this.setState({number: this.state.number+1});
        }
        const minus = () => {
            this.setState({number: this.state.number-1});
        }
        const reset = () => {
            this.setState({number: 0});
        }

        return (
            <div>
                <h1>{this.state.number}</h1>
                <Button onClick={plus} color="success">+</Button>
                <Button onClick={minus} color="danger">-</Button>
                <Button onClick={reset} color="warning">reset</Button>
            </div>
        );
    }
}

Number.propTypes = {};

export default Number;