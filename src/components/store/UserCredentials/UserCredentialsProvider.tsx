import React, { useState } from 'react';
import { UserContext } from './UserContext';

const UserCredentialsProvider: React.FC = ({ children }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ email, setEmail, name, setName, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserCredentialsProvider;
