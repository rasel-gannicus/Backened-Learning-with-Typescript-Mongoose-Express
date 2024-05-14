'use client' ; 
import React, { useState } from 'react';

const CounterApp = () => {
    let [counter, setCounter] = useState(0) ;
    console.log(counter);
    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button className='btn btn-warning'>Increase</button>
            <button className='btn btn-secondary'>Decrease</button>
        </div>
    );
};

export default CounterApp;