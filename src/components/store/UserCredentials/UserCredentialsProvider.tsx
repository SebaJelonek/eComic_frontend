import React, { useEffect, useState } from 'react';
import { UserContext } from './UserContext';

const UserCredentialsProvider: React.FC = ({ children }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const response = await fetch('http://localhost:1337/api/verify', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      });
      return response.json();
    };

    const res = verify();

    res.then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ email, setEmail, name, setName, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserCredentialsProvider;
