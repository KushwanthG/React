import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';
import './profile.css';

const Profile = ({ token }) => {
  const [users, setUsers] = useState([]);
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
        setError(error.message); // Set the error message
      }
    };

    const fetchDataAsync = async () => {
      const usersData = await fetchData('/users/');
      if (usersData) {
        setUsers(usersData);
        console.log("Profile:", usersData); // Log data being set
      }
    };

    fetchDataAsync();
  }, [token]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!users || !Array.isArray(users)) {
    return <div>No users data available.</div>;
  }

  return (
    <div className="transaction-table">
      <h2>Profile</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.fullName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
