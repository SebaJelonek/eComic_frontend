import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../store/UserCredentials/UserContext';
import Button from '../Button/Button';
import style from './NavBar.module.css';

const Router: React.FC = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <nav className={style['nav-container']}>
      <div className={style['nav-bar']}>
        <ul className={style['nav-list']}>
          {!isLoggedIn && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to='/register'>Register</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/about'>About</Link>
            </li>
          )}
          <li>
            <Link to='/index'>Logo</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to='/upload'>Upload</Link>
            </li>
          )}
          <li>
            <Button
              text='Get'
              type='success'
              onButtonClick={() => {
                const verify = async () => {
                  const response = await fetch(
                    'http://localhost:1337/api/just',
                    {
                      method: 'GET',
                      credentials: 'include',
                      mode: 'cors',
                      headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'Access-Control-Allow-Origin': 'http://localhost:3000/',
                      },
                    }
                  );
                  return response.json();
                };

                const res = verify();

                res.then((res) => {
                  console.log(res);
                });
              }}
            ></Button>
          </li>
          <li>
            <Button
              onButtonClick={() => {
                const verify = async () => {
                  const response = await fetch(
                    'http://localhost:1337/api/verify',
                    {
                      method: 'POST',
                      credentials: 'include',
                      mode: 'cors',
                      headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'Access-Control-Allow-Origin': 'http://localhost:3000/',
                      },
                      body: JSON.stringify({ user: 'seba' }),
                    }
                  );
                  return response.json();
                };

                const res = verify();

                res.then((res) => {
                  console.log(res);
                });
              }}
              text='Log Out'
              type='failure'
            ></Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Router;
