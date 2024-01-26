"use client";

import React, { useContext, useState } from 'react';
import { UserContext } from '../../components/UserContext';

interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface UserContextType {
  users: UserData[];
}

const Components: React.FC = () => {
  const { users } = useContext<UserContextType>(UserContext);
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);

  const handleButtonClick = (userId: string) => {
    if (selectedUserIds.includes(userId)) {
      // If user is already selected, remove them
      setSelectedUserIds(selectedUserIds.filter(id => id !== userId));
    } else {
      // If user is not selected, add them
      setSelectedUserIds([...selectedUserIds, userId]);
    }
  };

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user: UserData) => (
          <li key={user.id}>
            {user.name} 
            <button
              style={{
                backgroundColor: selectedUserIds.includes(user.id) ? 'red' : 'blue',
                color: '#fff',
                padding: '3px 4px',
                border: 'none',
                cursor: 'pointer',
                margin: '2px',
                borderRadius: '5px',
              }}
              onClick={() => handleButtonClick(user.id)}
            >
              {selectedUserIds.includes(user.id) ? 'Remove' : 'Add'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Components;
