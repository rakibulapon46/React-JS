import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    const decrement = () => {
        setCount(count => count - 1);
        setCount(count => count - 1);
        setCount(count => count - 1);
    }

    const reset = () => {
        setCount(0);
    }

  return (
    <div className='counter_container'>
        <h1 className='counter_display'>{count}</h1>
        <button onClick={decrement} className='counter_button'>Decrement</button>
        <button onClick={reset} className='counter_button'>Reset</button>
        <button onClick={increment} className='counter_button'>Increment</button>
    </div>
  )
}

export default Counter