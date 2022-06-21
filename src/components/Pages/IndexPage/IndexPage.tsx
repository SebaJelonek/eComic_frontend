import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../store/UserCredentials/UserContext';
import style from './IndexPage.module.css';

const IndexPage: React.FC = () => {
  const { isLoggedIn, name } = useContext(UserContext);

  return (
    <div>
      <h1>
        Welcome to <strong>eComicon</strong>
      </h1>
      {!isLoggedIn ? (
        <Fragment>
          <h2>
            First platform for comic creators to share their art with wide
            audience!
          </h2>
          <p>You can offer your stories for free or earn money doing so*</p>
          <p>Bring your creativity and comic talent to the light</p>
          <h3>What are you still waiting for, register now!</h3>
          <Link className={style['btn-link']} to='/register'>
            Register
          </Link>
          <h3 style={{ paddingTop: '2em' }}>
            Already registered? Great <strong>Log in</strong>!
          </h3>
          <Link className={style['btn-link']} to='/login'>
            Login
          </Link>
          <p className={style['disclamer']}>
            *the earning proposal is not implemented yet, we are currently
            working on it
          </p>
        </Fragment>
      ) : (
        <Fragment>
          <h2>
            Nice to see you again <strong>{name}</strong>
          </h2>
        </Fragment>
      )}
    </div>
  );
};

export default IndexPage;
