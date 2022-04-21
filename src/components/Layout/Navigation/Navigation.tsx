import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//----PAGES----
import LoginPage from '../../Pages/LoginPage/LoginPage';
import RegisterPage from '../../Pages/RegisterPage/RegisterPage';
import AdminPage from '../../Pages/AdminPage/AdminPage';
import AboutPage from '../../Pages/AboutPage/AboutPage';
//-------------
import NavBar from './NavBar/NavBar';
import { TodoContext } from '../../store/eComicContext';
import style from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [findBy, setFindBy] = useState('');
  const [password, setPassword] = useState('');
  const [reset, setReset] = useState(false);
  return (
    <Router>
      <NavBar />
      <div className={style['container']}>
        <TodoContext.Provider
          value={{ findBy, setFindBy, password, setPassword, reset, setReset }}
        >
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </TodoContext.Provider>
      </div>
    </Router>
  );
};

export default Navigation;
