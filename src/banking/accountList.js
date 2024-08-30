import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';

const AccountList = ({ token }) => {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      console.log("No token available");
      return;
    }

    const fetchData = async (url) => {
      try {
        const response = await axiosInstance.get(url);
        console.log("Data fetched:", response.data); // Log fetched data
        return response.data;
      } catch (error) {
        console.error(`There was a problem with the fetch operation for ${url}:`, error);
        setError(error);
      }
    };

    const fetchDataAsync = async () => {
      const accountsData = await fetchData('/api/banking/balance');
      if (accountsData) {
        setAccounts(accountsData);
        console.log("Accounts set:", accountsData); // Log data being set
      }
    };

    fetchDataAsync();
  }, [token]);

  const accountsArray = Array.isArray(accounts) ? accounts : [accounts];
  console.log("Accounts Array:", accountsArray); // Log the final accounts array

  return (
    <div className="transaction-table">
      <h2>Accounts</h2>
      {error && <p>Error fetching accounts: {error.message}</p>}
      <table>
        <thead>
          <tr>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accountsArray.map((account, index) => (
            <tr key={index}>
              <td>{typeof account === 'object' ? account.balance : account}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;
