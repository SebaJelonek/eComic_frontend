import React, { Fragment, useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../store/eComicContext';
import styles from './InputField.module.css';

interface Props {
  id: string;
  label: string;
  type:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  getInputValue: (value: string) => void;
}

const InputField: React.FC<Props> = ({ id, label, type, getInputValue }) => {
  const [input, setInput] = useState('');
  const { reset } = useContext(TodoContext);
  useEffect(() => {
    getInputValue(input);
  }, [getInputValue, input]);

  useEffect(() => {
    setInput('');
  }, [reset]);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <Fragment>
      <input
        className={styles['field']}
        type={type}
        id={id}
        name={id}
        onChange={onValueChange}
        value={input}
      />
      <label
        // if input length is greater than 0
        // label element has class of label
        // elsewhere element label has class of placeholder
        className={input.length > 0 ? styles['label'] : styles['placeholder']}
        htmlFor={id}
      >
        {label}:
      </label>
    </Fragment>
  );
};

export default InputField;
