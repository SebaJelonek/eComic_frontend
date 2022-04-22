import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../Layout/InputField/InputField';
import Button from '../../Layout/Button/Button';
import Form from '../../Layout/Form/Form';
import { FormContext } from '../../store/LoginFormContext/FormContext';
import { UserContext } from '../../store/UserCredentials/UserContext';

const LoginPage: React.FC = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const { findBy, setFindBy, password, setPassword, reset, setReset } =
    useContext(FormContext);

  const { name, email } = useContext(UserContext);

  const onSignInHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
    console.log(email);

    setReset(!reset);
    if (findBy && password !== '') {
      const login = async () => {
        const credentials: { findBy: string; password: string } = {
          findBy,
          password,
        };
        const token: string = JSON.stringify(credentials);

        const response = await fetch(
          `http://localhost:1337/api/user/${token}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        );

        return response.json();
      };
      const res = login();

      res.then((res) => {
        if (res.error) {
          if (res.error.includes('isConfirmed')) setMessage(res.error || '');
          setTimeout(() => {
            setMessage('');
          }, 5000);
        } else if (res.admin) {
          navigate('/admin');
        } else {
          navigate('/about');
        }
      });
    } else {
      if (findBy === '' && password === '') {
        setMessage('Email and password required');
        setTimeout(() => {
          setMessage('');
        }, 5000);
      } else if (findBy === '') {
        setMessage('Email required');
        setTimeout(() => {
          setMessage('');
        }, 5000);
      } else {
        setMessage('Password required');
        setTimeout(() => {
          setMessage('');
        }, 5000);
      }
    }
  };

  return (
    <div>
      <Form onFormSubmit={onSignInHandler}>
        <InputField
          id='name'
          label='Name or e-mail'
          getInputValue={(value) => setFindBy(value)}
          type='text'
        />
        <InputField
          id='password'
          label='Password'
          getInputValue={(value) => setPassword(value)}
          type='password'
        />
        <Button type='failure' text='Sign in fast!' />
      </Form>
      {message.length > 1 ? <p>{message}</p> : null}
    </div>
  );
};

export default LoginPage;
