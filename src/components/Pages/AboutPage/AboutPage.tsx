import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../store/UserCredentials/UserContext';
import style from './AboutPage.module.css';

const AboutPage: React.FC = () => {
  const { email } = useContext(UserContext);

  return (
    <div className={style['container']}>
      <h2>
        Your email: <strong>{email}</strong>
      </h2>
      <h3>
        <Link className={style['page-link']} to={'/subs'}>
          Change password
        </Link>
      </h3>
    </div>
  );
};

export default AboutPage;
