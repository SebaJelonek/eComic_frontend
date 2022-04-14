import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import RegisterPage from '../../Pages/RegisterPage/RegisterPage';
import NavBar from './NavBar';
import { TodoContext } from '../../store/eComicContext';
import style from './Navigation.module.css';

const Navigation: React.FC = () => {
  const isLogged = useContext(TodoContext);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
