import React from 'react';
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

const Navigation: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className={style['container']}>
        <UserCredentialsContextProvider>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </UserCredentialsContextProvider>
      </div>
    </Router>
  );
};

export default Navigation;
