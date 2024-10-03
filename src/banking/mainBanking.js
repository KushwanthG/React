import React, { useState, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import AccountList from './accountList';
import TransactionTable from './transactionTable';
import Profile from './profile';
import axiosInstance from './axiosInstance';
import Logout from './logout';
const Login = lazy(() => import('./login'));


const BankingApp = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [users, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axiosInstance.get(url);
        console.log("Data fetched:", response.data); // Log fetched data
        return response.data;
      } catch (error) {
        console.error(`There was a problem with the fetch operation for ${url}:`, error);
      }
    };
    const fetchDataAsync = async () => {
      const accountsData = await fetchData('/api/banking/balance');
      setAccounts(accountsData);

      const transactionsData = await fetchData('/api/banking/statement');
      setTransactions(transactionsData);

      const userData = await fetchData('/users/');
      setUser(userData);
    };
    if (token) {
      fetchDataAsync();
    } else {
      console.log("No token available");
    }
  }, [token]);

  const handleLogin = (token) => {
    setToken(token);
    setIsLoggedIn(true);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setToken('');
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div>
        {!isLoggedIn ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Login onLogin={handleLogin} />
          </Suspense>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/accounts" element={<AccountList token={token} />} />
              <Route path="/transactions" element={<TransactionTable token={token} />} />
              <Route path="/profile" element={<Profile token={token} />} />
              <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default BankingApp;
