import React, { useState } from 'react';
import InputField from '../../Layout/InputField/InputField';
import Button from '../../Layout/Button/Button';
import Form from '../../Layout/Form/Form';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postUser = async () => {
      const response = await fetch('http://localhost:1337/api/user/register', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      return response.json();
    };

    const res = postUser();

    res
      .then((res) => {
        setMessage(res.message);
        setTimeout(() => {
          setMessage('');
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <Button type='success' text='Sign up!' />
      </Form>
      {message.length > 1 ? <p>{message}</p> : null}
    </div>
  );
};

export default RegisterPage;
