import React, { useContext, useState } from 'react';
import Button from '../../Layout/Button/Button';
import FileInput from '../../Layout/FileInput/FileInput';
import Form from '../../Layout/Form/Form';
import InputField from '../../Layout/InputField/InputField';
import { FormContext } from '../../store/LoginFormContext/FormContext';

const AdminPage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState<string>('');
  const [img, setImg] = useState<File>();
  const [imgName, setImgName] = useState<string>('');
  const [message, setMessage] = useState('');

  const { reset, setReset, imgReset, setImgReset, pdfReset, setPdfReset } =
    useContext(FormContext);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (author && title && genre && fileName && file && img && imgName) {
      let formData = new FormData();
      /////////////////////////////////////////////////////////////////////
      // FormData.append takes three agruments, last of them is optional //
      /////////////////////////////////////////////////////////////////////
      //         The first argument is the name of the input field       //
      //         it has to match the recieved name on the back-end       //
      //           the type of this argument must be of string           //
      /////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////
      //   Second argument is a file its value has to be string or Blob  //
      //   however because the type File extends on Blob it can be used  //
      //                          as an argument                         //
      /////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////
      //         The last agument is the name of the file name           //
      //                      this argument is optional                  //
      //          but if we pass it in it has to be of type string       //
      /////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////

      formData.append('pdf', file, fileName);
      formData.append('thumbnail', img, imgName);

      const uploadFiles = async () => {
        setReset(!reset);
        setPdfReset(!pdfReset);
        const response = await fetch(
          'http://localhost:1337/api/admin/filesUpload',
          { method: 'POST', mode: 'cors', body: formData }
        );
        return response.json();
      };

      uploadFiles().then((res) => {
        const pdfID: string = res.pdfID;
        const imgID: string = res.imgID;

        const upload = async () => {
          const response = await fetch(
            'http://localhost:1337/api/admin/new-comic',
            {
              method: 'POST',
              mode: 'cors',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ title, author, genre, pdfID, imgID }),
            }
          );
          return response.json();
        };
        upload().then((res) => {
          setMessage(res.msg);
        });
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

  const getFile = (file: File) => {
    if (file.type !== 'application/pdf') {
      setMessage('Please use correct file format for your PDF file');
      let timeoutID = setTimeout(() => {
        setFile(undefined);
        setFileName('');
        setMessage('');
        setPdfReset(!pdfReset);
        clearTimeout(timeoutID);
      }, 5000);
    } else {
      setFile(file);
    }
  };

  const getImg = (img: File) => {
    if (!img.type.includes('image')) {
      setMessage('Please use correct file format for your image file');
      setTimeout(() => {
        setImg(undefined);
        setImgName('');
        setMessage('');
        setImgReset(!imgReset);
      }, 5000);
    } else {
      setImg(img);
    }
  };

  const getImgName = (imgName: string) => {
    setImgName(imgName);
  };

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
          buttonName='PDF'
        />
        <FileInput
          buttonName='Image'
          getFileName={getImgName}
          name={imgName}
          getFile={getImg}
        />
        <Button text='Submit' type='success' />
      </Form>
      {message.length > 1 ? <p>{message}</p> : null}
    </div>
  );
};

export default AdminPage;
