import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const handleClick = () => {
        const newSteps = steps + 1;
        setSteps(newSteps)
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])
    
    return (
        <>
        <h1>Count :: {steps}</h1>
        <button onClick={handleClick}>Click Now</button>
        </>
    );
};

export default Watch;