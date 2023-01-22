import React, { useState } from 'react';
import './OurFun.css';
const OurFun = () => {
    const [ourFuns, setOurFuns] = useState([
        {
            title: 'Our Fun Facts',
        }
    ])
    const [counters, setCounters] = useState([
        {
            count: 199,
            plus: '+',
            desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
        },
        {
            count: 575,
            plus: '+',
            desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
        },
        {
            count: 69,
            plus: '+',
            desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
        },
    ])
    return (
        <div className='container'>
            <div className='mt-5 mb-4'>
                {ourFuns.map((ourFun, i) => (
                    <h3 key={i} className='text-center our__fun'>{ourFun.title}</h3>
                ))}
            </div>
            <div className='d-flex justify-content-between'>
                {
                    counters.map((counter, i) => (
                        <div key={i}>
                            <div className='d-flex justify-content-center'>
                                <section className='count_one'>{counter.count}</section>
                                <section className='count_plus'>{counter.plus}</section>
                            </div>
                            <div><p className='text-center desc'>{counter.desc}</p></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurFun;