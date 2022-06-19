import React, { Fragment, useEffect, useState, useContext } from 'react';
import { FormContext } from '../../store/LoginFormContext/FormContext';
import style from './FileInput.module.css';

interface Props {
  name: string;
  getFileName: (name: string) => void;
  getFile: (file: File) => void;
  buttonName: string;
}

const FileInput: React.FC<Props> = ({
  name,
  getFileName,
  getFile,
  buttonName,
}) => {
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState('');
  const { pdfReset, imgReset } = useContext(FormContext);

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

  useEffect(() => {
    setFile(undefined);
    setFileName('');
  }, [pdfReset, imgReset]);

  return (
    <Fragment>
      <label
        className={
          file === undefined
            ? style['file-label__empty']
            : style['file-label__uploaded']
        }
        htmlFor={buttonName}
      >
        {name !== '' ? (
          <>
            <strong>{name} </strong>
            file ready to upload
          </>
        ) : (
          `Upload ${buttonName} File`
        )}
      </label>
      <input
        className={style['file-input']}
        type='file'
        name={buttonName}
        id={buttonName}
        onChange={onFileUpload}
      />
    </Fragment>
  );
};

export default FileInput;
