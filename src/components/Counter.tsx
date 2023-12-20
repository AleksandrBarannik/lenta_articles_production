import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {

    const [state,setState] = useState(0)

    function Increase()
    {
        setState(state+1);
    }

    function Decrease()
    {
        setState(state-1);
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={Increase}>Увеличить</button>
            <button onClick={Decrease}>Уменьшить</button>
        </div>
    );
};

export default Counter;