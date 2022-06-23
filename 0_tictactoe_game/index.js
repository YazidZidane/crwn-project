import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return(
    <button className="square" onClick={props.onClick}>
          {props.value}
    </button>
  )
}
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      // let html = [];
      // for (let i = 0; i < 3; i++) {
      //   let 
      //     for (let j = 0; j < 3; j++) {
            
      //     }
      // }
      return (
        
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
          clicks: null
        }],
        stepNumber: 0,        
        xIsnext: true
      };
    }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) return;
      squares[i] = this.state.xIsnext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
          clicks: i,
        }]),
        stepNumber: history.length,  
        xIsnext: !this.state.xIsnext,
      });
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsnext: (step % 2) === 0,
      })
    }
    
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const moves = history.map((step, move) => {
        const desc = move ? 
        'Go to move #' + move :
        'Go to game start';
        if (move == this.state.stepNumber) {
          return (
            <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{desc}
              </button>
              <span><b>{numToXY(history[move].clicks)}</b></span>
            </li>
          );
        }
        else return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}
            </button>
            <span>{numToXY(history[move].clicks)}</span>
          </li>
        );
      });
      

      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      }
      else {
        if (this.state.stepNumber == 9) status = 'Tied!';
        else {
          status = 'Next player: ' + (this.state.xIsnext ? 'X' : 'O');
        }        
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================

  class Test extends React.Component {
    state = {isHot: false};

    weather = "好"
    
    changeWeather = () => {
      console.log(this);
      const hotState = this.state.isHot
      this.setState({isHot: !hotState})
      // this.state = "不好"
    }
    
    render() {
      return <h1 onClick={this.changeWeather}>今天天气很{this.state.isHot ? "好" : "不好"}， 微风</h1>
    }
  }

  ReactDOM.render(
    <Test/>,
    document.getElementById('root')
  );

  

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function numToXY(step) {
    if (step === undefined) return 'undefin';
    return '(' + Math.floor(step / 3) + ', ' + step % 3 + ')';    
  }

