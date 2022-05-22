import React, { useState } from 'react';
import Button from '../../Layout/Button/Button';
import Form from '../../Layout/Form/Form';
import InputField from '../../Layout/InputField/InputField';

const AdminPage: React.FC = () => {
  const [title, setTitle] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div>
      <Form onFormSubmit={submitHandler}>
        <InputField
          getInputValue={(value) => {
            setTitle(value);
          }}
          id='title'
          label='Title'
          type='text'
        />
        <Button text='Submit' type='success' />
      </Form>
    </div>
  );
};

export default AdminPage;
