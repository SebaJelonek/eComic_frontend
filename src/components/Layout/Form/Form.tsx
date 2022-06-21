import React from 'react';
import style from './Form.module.css';

interface Props {
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => any;
}

const Form: React.FC<Props> = ({ children, onFormSubmit }) => {
  return (
    <form onSubmit={(e) => onFormSubmit(e)} className={style['center-form']}>
      {children}
    </form>
  );
};

export default Form;
