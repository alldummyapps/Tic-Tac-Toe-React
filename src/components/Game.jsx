import React, { Component } from 'react';
import Board from './Board';






class Game extends Component {
  


state ={
        xNext:true,
        stepNumber: 0,
        history:[
            {squares:Array(9).fill(null)}
        ],
        playerOneScore: 0,
        playerTwoScore: 0,
        
       
}

calculateWinner =(squares) => {

    const winLines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    for(let i=0; i<winLines.length;i++){
        const [a,b,c] = winLines[i]
        if(squares[a] &&squares[a] === squares[b] && squares[b] === squares[c]){
          
            return squares[a]
        }
    }
    
    
        return null
    }


resetGame = (step, winner) =>{

    this.setState({
    stepNumber: step,
    })
    this.handleScore(winner)

    }


    handleScore = (winner) => {

        if(winner === 'X'){
            let playerOneScore =this.state.playerOneScore
            this.setState({playerOneScore: playerOneScore+=1})
        }else{
            let playerTwoScore =this.state.playerTwoScore
            this.setState({playerTwoScore: playerTwoScore+=1})
        }

    }

handleClick = (i) =>{
const history = this.state.history.slice(0,this.state.stepNumber + 1);
const current = history[history.length-1]
const squares = current.squares.slice();
const winner = this.calculateWinner(squares)
if(winner || squares[i]){
  
    return;
}

squares[i] = this.state.xNext ? 'X': 'O';

this.setState({
history: history.concat({
squares:squares,
}),
xNext: !this.state.xNext,
stepNumber: history.length


})


}



    render() { 

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

        let status = winner ? ( winner === "X")  ? "Player One" : "Player Two" : null
     
       
        return (  
          <React.Fragment>
<div className="scoreBoard">
    <div style={{ fontWeight: "bold"}}  >Current Winner: {status}</div>
    <div><h4>Player one: X</h4>
    <h4>Player two: O</h4></div>
    <h4>Player One Score: {this.state.playerOneScore}</h4>
    <h4>Player Two Score: {this.state.playerTwoScore}</h4>
    <div style={{float:"left", marginTop:"60px", marginLeft:"45px"}}>
    <button  className="resetBtn" onClick={()=> {this.resetGame(0,winner)}}>Reset Game</button>
    </div>
    </div>
    
<div className="game">
  
<div className="gameBoard">
    
<Board  clicked={(i) => this.handleClick(i)}  squares={current.squares}/>
</div>
<div className="game-info">




</div>
</div>


</React.Fragment>
        );
    }
}
 
export default Game;