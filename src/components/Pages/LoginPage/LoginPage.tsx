import React, { useEffect, useState } from 'react';
import InputField from '../../Layout/InputField/InputField';
import Button from '../../Layout/Button/Button';

const LoginPage: React.FC = () => {
  const [findBy, setFindBy] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const resetInputFields = () => {
      setFindBy('');
      setPassword('');
      setReset(!reset);
      console.log('hello');
    };
  }, [reset]);

  const onSignInHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (findBy && password !== '') {
      const postUser = async () => {
        const response = await fetch('http://localhost:1337/api/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            findBy: findBy,
            password: password,
          }),
        });

        return response.json();
      };
      const res = postUser();

      res.then((res) => {
        setReset(!reset);
        console.log('what up?');
        console.log(res);
        setMessage(res.error || '');
        setTimeout(() => {
          setMessage('');
        }, 5000);
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
      <form onSubmit={onSignInHandler}>
        <InputField
          id='name'
          label='Name or e-mail'
          getInputValue={(value) => setFindBy(value)}
          resetInput={findBy}
          type='text'
        />
        <InputField
          id='password'
          label='Password'
          getInputValue={(value) => setPassword(value)}
          resetInput={password}
          type='password'
        />
        <Button type='failure' text='Sign in fast!' />
      </form>
      {message.length > 1 ? <p>{message}</p> : null}
    </div>
  );
};

export default LoginPage;
