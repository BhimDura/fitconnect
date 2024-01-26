"use client";
import React, { createContext, useState, useEffect } from 'react';


interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
}

const UserContext = createContext<{ users: UserData[] }>({ users: [] });
const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: abortController.signal,
        });

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();

    return () => {
      // Cleanup function to abort the fetch if the component is unmounted
      abortController.abort();
    };
  }, []);

  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
