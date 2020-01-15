import React from 'react';


const Square = ({value, clicked}) => {
    return ( 

<button className="square" onClick={clicked}>
    {value}
</button>



     );
}
 
export default Square;