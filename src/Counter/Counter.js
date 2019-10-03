import React, {useState} from 'react';

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);

    const incrementValue = () => setCounterValue(counterValue + 1);

    return (
        <div>
            {counterValue}
            <button onClick={incrementValue}>Increment</button>
        </div>
    );
};

export default Counter;