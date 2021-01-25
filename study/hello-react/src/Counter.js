import React, { Component } from 'react';

const Problematic = () => {
    throw(new Error('버그가 나타났다!'));
    return (
        <div>

        </div>
    );
};

class Counter extends Component {
    state = {
        number : 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentDidCatch(error, info) {
        this.setState({
            error : true
        });
    }

    handleIncrease = () => {
        /*this.setState({
            number : this.state.number + 1
        });*/
        const {number} = this.state;
        this.setState({
            number : number + 1
        });
    }

    handleDecrease = () => {
        /*this.setState({
            number : this.state.number - 1
        });*/
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                { this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;