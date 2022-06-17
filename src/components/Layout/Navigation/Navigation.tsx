import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//----PAGES----
import LoginPage from '../../Pages/LoginPage/LoginPage';
import RegisterPage from '../../Pages/RegisterPage/RegisterPage';
import UploadPage from '../../Pages/UploadPage/UploadPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';
import IndexPage from '../../Pages/IndexPage/IndexPage';
//-------------
import UserCredentialsContextProvider from '../../store/LoginFormContext/LoginFormProvider';

import NavBar from './NavBar/NavBar';
import style from './Navigation.module.css';
import { UserContext } from '../../store/UserCredentials/UserContext';
import Reader from '../Reader/Reader';

const Navigation: React.FC = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Router>
      <NavBar />
      <div className={style['container']}>
        <UserCredentialsContextProvider>
          <Routes>
            {!isLoggedIn ? (
              <Route path='/login' element={<LoginPage />} />
            ) : (
              <Route path='/about' element={<AboutPage />} />
            )}
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/index' element={<IndexPage />} />
            <Route path='/admin' element={<UploadPage />} />
            <Route path='/reader/:id' element={<Reader />} />
            {isLoggedIn ? (
              <Route path='/about' element={<AboutPage />} />
            ) : (
              <Route path='/login' element={<LoginPage />} />
            )}
            {isLoggedIn
              ? console.log('is logged')
              : console.log('is not logged')}
          </Routes>
        </UserCredentialsContextProvider>
      </div>
    </Router>
  );
};

export default Navigation;
