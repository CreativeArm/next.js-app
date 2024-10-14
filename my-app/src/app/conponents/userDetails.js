"use client";
import React, { useEffect, useState } from "react";

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response not okay");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const render = users.map((user) => {
    return (
      <div>
        <div key={users.id}>
          <ul className="space-y-2">
            <li className="p-4 border border-grey-300 rounded">
              Name:
              {user.name} {user.name.first} {user.name.last}
              <p> Email: {user.email}</p>
              <p className="font-bold">Company: {user.company.name}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className="text-3x1 font-bold mb-4"> New User List</h1>
      {render}
    </div>
  );
}

export default UserDetails;
