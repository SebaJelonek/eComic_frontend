import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const Router: React.FC = () => {
  return (
    <nav className={style['nav-container']}>
      <div className={style['nav-bar']}>
        <ul className={style['nav-list']}>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Router;
