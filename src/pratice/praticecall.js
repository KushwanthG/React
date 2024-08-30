import React, { useState, useCallback } from 'react';

// Child component that receives a callback function
const ChildComponent = React.memo(({ onButtonClick }) => {
  console.log('ChildComponent re-rendered');
  return (
    <button onClick={onButtonClick} style={{ padding: '10px', fontSize: '16px' }}>
      Click Me
    </button>
  );
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  // Memoize the callback to prevent re-creation on each render
  const handleButtonClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // No dependencies, so the function is created only once

  return (
    <div style={{ padding: '20px' }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px', padding: '10px 15px', fontSize: '16px' }}>
        Increment Count
      </button>
      <ChildComponent onButtonClick={handleButtonClick} />
    </div>
  );
};

export default UseCallbackExample;
