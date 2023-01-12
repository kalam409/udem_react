import React from 'react';
import { useState } from 'react';


const click = {
    border: '2px solid brown',
    backgroundColor: 'lightblue',
    width: '200px',
    margin: '10px',
    fontSize: '18px'
}

const Increment = () => {
    const [text, setText] = useState(0)
    const [number, setNumber] = useState(0)
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const plus = () => {
        const newNumber = number + parseInt(text);
        setNumber(newNumber);
    }
    const minus = () => {
        if (number - parseInt(text) > 0) {
            const newNumber = number - parseInt(text);
        setNumber(newNumber)
        }
    }
    return (
        <div>
            <h2>{number}</h2>
            {/* <h3>{text}</h3> */}
            <input type="number" className='text' onChange={handleChange}/><br/>
            <button style={click} onClick={plus}>+</button>
            <button style={click} onClick={minus}>-</button>
        </div>
    );
};

export default Increment;
