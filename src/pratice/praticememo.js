import React, { useState, useMemo } from 'react';

// Expensive function to compute the factorial of a number
const computeFactorial = (num) => {
  console.log('Computing factorial...');
  if (num <= 0) return 1;
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

const UseMemoExample = () => {
  const [count, setCount] = useState(1);
  const [input, setInput] = useState(1);

  // Memoized factorial calculation
  const factorial = useMemo(() => computeFactorial(input), [input]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Factorial of {input}: {factorial}</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Enter a number: 
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(parseInt(e.target.value) || 0)}
            style={{ marginLeft: '10px', padding: '5px', fontSize: '16px' }}
          />
        </label>
      </div>
      
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 15px', fontSize: '16px' }}>
        Increment Count
      </button>

      <h2>Count: {count}</h2>
    </div>
  );
};

export default UseMemoExample;
