import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//----PAGES----
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import UploadPage from '../Pages/UploadPage/UploadPage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import ComicPage from '../Pages/ComicPage/ComicPage';
import ReaderPage from '../Pages/ReaderPage/ReaderPage';
import IndexPage from '../Pages/IndexPage/IndexPage';
import UnconfirmedComics from '../Pages/UnconfirmedComicsPage/UnconfirmedComicsPage';
import UserComicCollectionPage from '../Pages/UserComicCollectionPage/UserComicCollectionPage';
//---CONTEXT---
import UserCredentialsContextProvider from '../store/LoginFormContext/LoginFormProvider';
import { UserContext } from '../store/UserCredentials/UserContext';
//----OTHER----
import NavBar from '../Layout/NavBar/NavBar';
import style from './Navigation.module.css';

const Navigation: React.FC = () => {
  const { isLoggedIn, isArtist } = useContext(UserContext);

  return (
    <Router>
      <NavBar />
      <div className={style['container']}>
        <UserCredentialsContextProvider>
          <Routes>
            <Route path='/' element={<IndexPage />} />
            {isLoggedIn
              ? console.log('is logged')
              : console.log('is not logged')}
            {isLoggedIn ? (
              <Route path='/login' element={<LoginPage />} />
            ) : (
              <Route path='/about' element={<AboutPage />} />
            )}
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/upload' element={<UploadPage />} />
            <Route path='/comics' element={<ComicPage />} />
            <Route path='/unconfirmed-comics' element={<UnconfirmedComics />} />
            {isLoggedIn ? (
              <Route
                path='/reader/:id/:author/:title'
                element={<ReaderPage />}
              />
            ) : (
              <Route path='/login' element={<LoginPage />} />
            )}
            {isLoggedIn ? (
              <Route path='/about' element={<AboutPage />} />
            ) : (
              <Route path='/login' element={<LoginPage />} />
            )}
            {isLoggedIn && isArtist && (
              <Route path='/my-comics' element={<UserComicCollectionPage />} />
            )}
          </Routes>
        </UserCredentialsContextProvider>
      </div>
    </Router>
  );
};

export default Navigation;
