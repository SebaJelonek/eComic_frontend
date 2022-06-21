import React from 'react';

interface context {
  types: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    isArtist: boolean;
    setIsArtist: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const UserContext = React.createContext<context['types']>({
  email: '',
  setEmail: () => {},
  name: '',
  setName: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isArtist: false,
  setIsArtist: () => {},
});
