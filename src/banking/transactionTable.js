import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';
import './transactionTable.css';

const TransactionTable = ({ token }) => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      console.log("No token available");
      return;
    }

    const fetchData = async (url) => {
      try {
        const response = await axiosInstance.get(url, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log("Data fetched:", response.data); // Log fetched data
        return response.data;
      } catch (error) {
        console.error(`There was a problem with the fetch operation for ${url}:`, error);
        setError(error);
      }
    };

    const fetchDataAsync = async () => {
      const transactionsData = await fetchData('/api/banking/statement');
      if (transactionsData) {
        setTransactions(transactionsData);
        console.log("Transactions set:", transactionsData); // Log data being set
      }
    };

    fetchDataAsync();
  }, [token]);

  console.log("Transactions Array:", transactions); // Log the final transactions array

  return (
    <div className="transaction-table">
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.transactionId}>
              <td>{transaction.transactionType}</td>
              <td>{transaction.email}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.transactionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
