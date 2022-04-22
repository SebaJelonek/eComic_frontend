import React, { useState } from 'react';
import { UserContext } from './UserContext';

const UserCredentialsProvider: React.FC = ({ children }) => {
  const [email, setEmail] = useState('kupka');
  const [name, setName] = useState('mosze');

  return (
    <UserContext.Provider value={{ email, setEmail, name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserCredentialsProvider;
