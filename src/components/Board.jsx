import React, { Component } from 'react';
import Square from './Square';


class Board extends Component {
    state = {  }


    getSquare =(i) =>{


        return <Square value={this.props.squares[i]}
        clicked={()=>this.props.clicked(i)}
        />
    }




    
    
    render() { 
        return (  
<React.Fragment>

<div className="border-row">
{this.getSquare(0)}
{this.getSquare(1)}
{this.getSquare(2)}
</div>
<div className="border-row">
{this.getSquare(3)}
{this.getSquare(4)}
{this.getSquare(5)}
</div>
<div className="border-row">
{this.getSquare(6)}
{this.getSquare(7)}
{this.getSquare(8)}
</div>
</React.Fragment>
        );
    }
}
 
export default Board;