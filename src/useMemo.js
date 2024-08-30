import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ a, b }) => {
  const computeExpensiveValue = (a, b) => {
    console.log('Computing expensive value...');
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a,b]);

  return (
    <div>
      <h1>Memoized Value: {memoizedValue}</h1>
    </div>
  );
};

const UseMemo = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  return (
    <div>
      <ExpensiveComponent a={a} b={b} />
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b + 1)}>Increment B</button>
    </div>
  );
};

export default UseMemo;