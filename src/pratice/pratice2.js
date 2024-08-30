import React, { useRef } from 'react';

const Pratice2 = () => {
  // Create a ref using useRef
  const inputRef = useRef(null);

  // Function to focus the input field
  const handleFocus = () => {
    // Focus the input field using the ref
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef.current)
      console.log(inputRef.current.value)
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        ref={inputRef} // Assign the ref to the input element
        placeholder="Click the button to focus"
        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={handleFocus} style={{ padding: '10px 15px', fontSize: '16px' }}>
        Focus Input
      </button>
    </div>
  );
};

export default Pratice2;