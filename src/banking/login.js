import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);
  
      try {
        const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Please Enter Valid Details');
        }
  
        const data = await response.json();
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token);
        onLogin(data.token);
      } catch (error) {
        console.error('There was an error!', error);
        setError(error.message);
      }
    };
  
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h1>Login</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block"> Login </button>
                </form>
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Login