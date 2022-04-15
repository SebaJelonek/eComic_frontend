import React from 'react';
import style from './Form.module.css';

interface Props {
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => any;
}

const Form: React.FC<Props> = ({ children, onSubmitForm }) => {
  return (
    <form onSubmit={(e) => onSubmitForm(e)} className={style['center-form']}>
      {children}
    </form>
  );
};

export default Form;
