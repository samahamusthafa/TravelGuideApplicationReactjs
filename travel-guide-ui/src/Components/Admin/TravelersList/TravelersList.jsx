// UserTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TravelersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user details from the server
    axios.get('/travelerslist')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TravelersList;
