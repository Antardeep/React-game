import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
    constructor() {
        super();
        this.state = {
            turnX: true,
            squareArray: Array(9).fill(null)
        }
        this.renderSquare = this.renderSquare.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onWin = this.onWin.bind(this);
        this.reset = this.reset.bind(this);
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squareArray[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    handleClick(i) {
        const squareArray = this.state.squareArray.slice();
        squareArray[i] = this.state.turnX ? 'X' : 'O';
        this.setState({
            squareArray: squareArray,
            turnX: !this.state.turnX,
        });
    }
    onWin(arr) {
        const winningStates = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < winningStates.length; i++) {
          const [w1, w2, w3] = winningStates[i];
          if (arr[w1] === arr[w2] && arr[w1] === arr[w3]) {
            return arr[w1];
          }
        }
        return null;
    }
    reset() {
        this.setState({
            turnX: true,
            squareArray: Array(9).fill(null)
        })
    }

    render() {
        const winner = this.onWin(this.state.squareArray);
        return (
            <div>
                <div>
                    <button className="reset" onClick={this.reset}>
                        Reset
                    </button>
                </div>
                <div className="main">
                    <div className={this.state.turnX ? "active" : "none"}><p className="text">X</p></div>
                    <div className="board">
                        <div className="boardRow">
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                        </div>
                        <div className="boardRow">
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                        </div>
                        <div className="boardRow">
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                        </div>
                    </div>
                    <div className={this.state.turnX ? "none" : "active"}><p className="text">O </p></div>
                </div>
                {winner ?
                    <div className="resultText">
                        <p className="active">Congratulations!!</p>
                        <p className="resultText1">{winner} is the winner</p>
                    </div> :
                    null}
            </div>
        );
    }
}

export default Board;