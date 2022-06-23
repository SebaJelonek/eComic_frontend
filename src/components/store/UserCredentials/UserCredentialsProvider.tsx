import React, { useEffect, useState } from 'react';
import { UserContext } from './UserContext';

const UserCredentialsProvider: React.FC = ({ children }) => {
  const [email, setEmail] = useState('userEmail@mail.com'); //set to empty when done
  const [name, setName] = useState('userName'); //set to empty when done
  const [isLoggedIn, setIsLoggedIn] = useState(true); //set to false when done
  const [isArtist, setIsArtist] = useState(true); //set false when done

  useEffect(() => {
    // const verify = async () => {
    //   const response = await fetch('http://localhost:1337/api/verify', {
    //     method: 'POST',
    //     mode: 'cors',
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    //   return response.json();
    // };
    // const res = verify();
    // res.then((res) => {
    //   console.log(res);
    // });
  }, []);

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        name,
        setName,
        isLoggedIn,
        setIsLoggedIn,
        isArtist,
        setIsArtist,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserCredentialsProvider;
