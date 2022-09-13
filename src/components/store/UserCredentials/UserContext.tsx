import React from 'react';

interface context {
  types: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>;
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    isArtist: boolean;
    setIsArtist: React.Dispatch<React.SetStateAction<boolean>>;
    isAdmin: boolean;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    favoriteComicList: string[];
    setFavoriteComicList: React.Dispatch<React.SetStateAction<string[]>>;
    unconfirmedComics: {
      _id: string;
      title: string;
      author: string;
      genre: string;
      pdfFileID: string;
      thumbnailID: string;
    }[];
    setUnconfirmedComics: React.Dispatch<
      React.SetStateAction<
        {
          _id: string;
          title: string;
          author: string;
          genre: string;
          pdfFileID: string;
          thumbnailID: string;
        }[]
      >
    >;
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
  isAdmin: false,
  setIsAdmin: () => {},
  userId: '',
  setUserId: () => {},
  favoriteComicList: [],
  setFavoriteComicList: () => {},
  unconfirmedComics: [
    {
      _id: '',
      thumbnailID: '',
      title: '',
      author: '',
      genre: '',
      pdfFileID: '',
    },
  ],
  setUnconfirmedComics: () => {},
});
