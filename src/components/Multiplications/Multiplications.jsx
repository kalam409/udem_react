import React from 'react';
import { useState } from 'react';


const boost = {
    border: '2px solid brown',
    backgroundColor: 'lightblue',
    width: '100px'
}

const Multiplications = () => {
    const [multi, setMulti] = useState(1)
    const handleBoost = () => {
        const newMulti = multi * 2;
        setMulti(newMulti)
    }
    return (
        <div>
            <h1>Multiplication :: {multi}</h1>
            <button style={boost} onClick={handleBoost}>Boost</button>
        </div>
    );
};

export default Multiplications;