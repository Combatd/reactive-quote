import React from 'react';



const QuoteControl = (props) => {

    return (
        <div className="CounterControl" onClick={props.clicked}>
            {props.label}
        </div>
    )  
    
}

export default QuoteControl;