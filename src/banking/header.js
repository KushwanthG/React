import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <header className="header">
      <div className="logo">Banking App</div>
      <nav>
        <ul>

        <li><Link to="/accounts">Accounts</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          {isAuthenticated ? (
            <li><Link to="/logout">Logout</Link></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
