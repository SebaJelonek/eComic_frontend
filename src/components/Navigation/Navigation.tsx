import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//----PAGES----
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import UploadPage from '../Pages/UploadPage/UploadPage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import IndexPage from '../Pages/IndexPage/IndexPage';
import ReaderPage from '../Pages/ReaderPage/ReaderPage';
//---CONTEXT---
import UserCredentialsContextProvider from '../store/LoginFormContext/LoginFormProvider';
import { UserContext } from '../store/UserCredentials/UserContext';
//----OTHER----
import NavBar from '../Layout/NavBar/NavBar';
import style from './Navigation.module.css';

const Navigation: React.FC = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Router>
      <NavBar />
      <div className={style['container']}>
        <UserCredentialsContextProvider>
          <Routes>
            {isLoggedIn
              ? console.log('is logged')
              : console.log('is not logged')}
            {isLoggedIn ? (
              <Route path='/login' element={<LoginPage />} />
            ) : (
              <Route path='/about' element={<AboutPage />} />
            )}
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/index' element={<IndexPage />} />
            <Route path='/upload' element={<UploadPage />} />
            {isLoggedIn ? (
              <Route path='/reader/:id' element={<ReaderPage />} />
            ) : (
              <Route path='/login' element={<LoginPage />} />
            )}
            {isLoggedIn ? (
              <Route path='/about' element={<AboutPage />} />
            ) : (
              <Route path='/login' element={<LoginPage />} />
            )}
          </Routes>
        </UserCredentialsContextProvider>
      </div>
    </Router>
  );
};

export default Navigation;
