import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//----PAGES----
import LoginPage from '../../Pages/LoginPage/LoginPage';
import RegisterPage from '../../Pages/RegisterPage/RegisterPage';
import AdminPage from '../../Pages/AdminPage/AdminPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';
//-------------
import UserCredentialsContextProvider from '../../store/LoginFormContext/LoginFormProvider';

import NavBar from './NavBar/NavBar';
import style from './Navigation.module.css';
import { UserContext } from '../../store/UserCredentials/UserContext';

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
            <Route path='/admin' element={<AdminPage />} />
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
