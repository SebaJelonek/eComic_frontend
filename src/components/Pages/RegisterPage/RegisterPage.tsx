import React, { useState } from 'react';
import InputField from '../../Layout/InputField/InputField';
import Button from '../../Layout/Button/Button';
import Form from '../../Layout/Form/Form';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  let timeoutID: any;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postUser = async () => {
      if (password === passwordCheck) {
        const response = await fetch(
          'https://ecomic-backend.onrender.com/api/user/register',
          {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          }
        );
        return response.json();
      } else {
        clearTimeout(timeoutID);
        setMessage('Password does not match');
        setTimeout(() => {
          setMessage('');
          clearTimeout(timeoutID);
        }, 5000);
      }
    };

    postUser().then(({ message }) => {
      setMessage(message);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        setMessage('');
        clearTimeout(timeoutID);
      }, 5000);
    });

    //close function
  };

  return (
    <div>
      <Form onFormSubmit={onSubmitHandler}>
        <InputField
          id='name'
          label='Name'
          getInputValue={(value) => setName(value)}
          type='text'
        />
        <InputField
          id='email'
          label='Email'
          getInputValue={(value) => setEmail(value)}
          type='email'
        />
        <InputField
          id='password'
          label='Password'
          getInputValue={(value) => setPassword(value)}
          type='password'
        />
        <InputField
          id='password-check'
          label='Password'
          getInputValue={(value) => setPasswordCheck(value)}
          type='password'
        />
        <Button type='success' text='Sign up!' />
      </Form>
      {message.length > 1 ? <p>{message}</p> : null}
    </div>
  );
};

export default RegisterPage;
