import React, { useState } from 'react';

function LazyForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Form submitted with data:", { name, username, password });
    // Clear the input fields after submission
    setName('');
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register Form </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        </div>
        <div>
          <label>Username: </label>
          <input  type="text" value={username} placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
        <label>Password: </label>
          <input  type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LazyForm;
