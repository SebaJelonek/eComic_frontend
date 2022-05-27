import React from 'react';
import style from './Form.module.css';

interface Props {
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => any;
  encType?: 'multipart/form-data';
}

const Form: React.FC<Props> = ({ children, onFormSubmit, encType }) => {
  return (
    <form
      encType=''
      onSubmit={(e) => onFormSubmit(e)}
      className={style['center-form']}
    >
      {children}
    </form>
  );
};

export default Form;
