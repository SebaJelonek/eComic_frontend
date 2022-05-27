import React, { Fragment, useEffect, useState } from 'react';
import style from './FileInput.module.css';

interface Props {
  name: string;
  getFileName: (name: string) => void;
  getFile: (file: File) => void;
}

const FileInput: React.FC<Props> = ({ name, getFileName, getFile }) => {
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState('');

  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.files !== null && setFile(e.currentTarget.files[0]);
  };

  useEffect(() => {
    file !== undefined && setFileName(file.name);
  }, [file]);

  useEffect(() => {
    getFileName(fileName);
    file !== undefined && getFile(file);
  }, [getFileName, getFile, fileName, file]);

  return (
    <Fragment>
      <label
        className={
          file === undefined
            ? style['file-label__empty']
            : style['file-label__uploaded']
        }
        htmlFor='file-upload'
      >
        {name !== '' ? name + ' file ready to upload' : 'Upload File'}
      </label>
      <input
        className={style['file-input']}
        type='file'
        name='file-upload'
        id='file-upload'
        onChange={onFileUpload}
      />
    </Fragment>
  );
};

export default FileInput;
