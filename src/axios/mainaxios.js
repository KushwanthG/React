import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';



function Mainaxios() {

    const [data, setData] = useState({
        email: "",
        password: ""
      });
      const [error, setError] = useState(null);
    
      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          email: data.email,
          password: data.password
        };
        axiosInstance
          .post("http://localhost:8080/auth/login", userData)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log("server responded");
            } else if (error.request) {
              console.log("network error");
            } else {
              console.log(error);
            }setError(error);
          });
      };
    
      return (
        <div>
          <h1>Login Account</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Login</button>
          </form>

        <div>
        {data ? (
          <p>{data.message}</p>
        ) : (
          error ? (
            <p>Error: {error.message}</p>
          ) : (
            <p>Loading...</p>
          )
        )}
        </div>

        </div>
        
      );
}

export default Mainaxios;
