import React, { useState } from 'react'
import Button from './Button';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <Button
        size='medium' 
        color='blue'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
      <Button 
        size='medium'
        color='green'
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </Button>
    </div>
  )
};

export default Counter;