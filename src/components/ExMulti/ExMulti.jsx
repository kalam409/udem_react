import React, { useState } from 'react';
const click = {
    border: '2px solid brown',
    backgroundColor: 'lightblue',
    width: '200px',
    margin: '10px',
    fontSize: '18px'
}
const ExMulti = () => {
    const [exmulti, setExmulti] = useState(1)
    const handleClick = () => {
        const newExmulti = exmulti * 2
        setExmulti(newExmulti)
    }
    return (
        <>
        <h3>ExMulti :: {exmulti}</h3>
        <button style={click} onClick={handleClick}>Click Now</button>
        </>
    );
};

export default ExMulti;