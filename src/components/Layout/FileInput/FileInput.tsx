import React, { Fragment, useState } from 'react';
import style from './FileInput.module.css';

interface Props {
  name: string;
}

const FileInput: React.FC<Props> = ({ name }) => {
  const [newName, setNewName] = useState(name);
  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.currentTarget.value);
    console.log(e.currentTarget.value);
    console.log(e.currentTarget);
  };

  return (
    <Fragment>
      <input type='file' name={newName} id={newName} onChange={updateTitle} />
    </Fragment>
  );
};

export default FileInput;
