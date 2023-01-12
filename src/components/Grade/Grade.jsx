import React, { useState } from 'react';

const Grade = () => {
    const [grade, setGrade] = useState()
    const handleChange = (e) => {
        console.log(e.target.value)
        if (e.target.value < 33) {
            setGrade('FAIL')
        }
        else if (e.target.value <= 33) {
            setGrade('BELOW AVERAGE') 
        }
        else if (e.target.value <= 49) {
            setGrade('AVERAGE') 
        }
        else if (e.target.value <= 59) {
            setGrade('ABOVE AVERAGE') 
        }
        else if (e.target.value <= 69) {
            setGrade('GOOD') 
        }
        else if (e.target.value <= 79) {
            setGrade('VERY GOOD') 
        }
        else if (e.target.value <= 89) {
            setGrade('EXCELLENT') 
        }
        else if (e.target.value <= 100) {
            setGrade("OUTSTANDING")
        }
        else {
            setGrade("Wrong Value")
        }
    }
    return (
        <div>
            <h3>Grade :: {grade}</h3>
            <input type="number" name='number' onChange={handleChange}/>
            <br/><br/>
            {/* <button>Result Here</button> */}
        </div>
    );
};

export default Grade;