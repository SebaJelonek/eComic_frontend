import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../store/UserCredentials/UserContext';
import Profile from '../Profile/Profile';

import style from './NavBar.module.css';
import bookImg from './3145866.png';

const logo = <img style={{ width: '50px' }} src={bookImg} alt='book logo' />;

const Router: React.FC = () => {
  const { isLoggedIn, isArtist } = useContext(UserContext);

  return (
    <nav className={style['nav-container']}>
      <div className={style['nav-bar']}>
        <ul className={style['nav-list']}>
          <li>
            <Link className={style['nav-link']} to='/'>
              {logo}
            </Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link className={style['nav-link']} to='/login'>
                Login
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link className={style['nav-link']} to='/register'>
                Register
              </Link>
            </li>
          )}
          {isLoggedIn && isArtist && (
            <li>
              <Link className={style['nav-link']} to='/upload'>
                Upload
              </Link>
            </li>
          )}
          <li>
            <Link className={style['nav-link']} to='/comics'>
              Comics
            </Link>
          </li>
          {/* <li>
            <Button onButtonClick={fetchTwo} text='Get' type='success' />
            </li>
            <li>
            <Button onButtonClick={fetchOne} text='Log Out' type='failure' />
          </li> */}
        </ul>
        {isLoggedIn && (
          <Profile
            className={`${style['nav-link']} ${style['profile-icon']}`}
          />
        )}
      </div>
    </nav>
  );
};

export default Router;
