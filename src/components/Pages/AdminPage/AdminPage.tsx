import React, { useState } from 'react';
import Button from '../../Layout/Button/Button';
import FileInput from '../../Layout/FileInput/FileInput';
import Form from '../../Layout/Form/Form';
import InputField from '../../Layout/InputField/InputField';

const AdminPage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (author && title && genre && fileName) {
      const upload = async () => {
        const response = await fetch('http://localhost:1337/api/upload', {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, author, genre, fileName }),
        });
        return response.json();
      };

      upload().then((res) => {
        console.log(res.msg);
      });
    }
  };

  const getTitle = (title: string) => {
    setTitle(title);
  };

  const getAuthor = (author: string) => {
    setAuthor(author);
  };

  const getGenre = (genre: string) => {
    setGenre(genre);
  };

  const getFileName = (name: string) => {
    setFileName(name);
  };

  const getFile = (file: File) => {};

  return (
    <div>
      <Form onFormSubmit={submitHandler} encType='multipart/form-data'>
        <InputField
          getInputValue={getTitle}
          id='title'
          label='Title'
          type='text'
        />
        <InputField
          getInputValue={getAuthor}
          id='author'
          label='Author'
          type='text'
        />
        <InputField
          getInputValue={getGenre}
          id='genre'
          label='Genre'
          type='text'
        />
        <FileInput
          getFileName={getFileName}
          name={fileName}
          getFile={getFile}
        />
        <Button text='Submit' type='success' />
      </Form>
    </div>
  );
};

export default AdminPage;
