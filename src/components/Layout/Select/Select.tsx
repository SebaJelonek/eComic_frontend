import React, { Fragment, useEffect, useState } from 'react';
import style from './Select.module.css';

interface Props {
  options: string[];
  name: string;
  getGenre: (value: string) => void;
}

const Select: React.FC<Props> = ({ options, name, getGenre }) => {
  const [genre, setGenre] = useState('1');

  useEffect(() => {
    getGenre(genre);
  }, [genre, getGenre]);

  return (
    <Fragment>
      <select
        onClick={(e: any) => {
          if (genre === '1') {
            setGenre('2');
          } else {
            setGenre(e.currentTarget.value);
          }

          console.log('click');
        }}
        className={
          genre === '1'
            ? style['select-field__transparent']
            : style['select-field']
        }
        name={name}
        id={name}
      >
        {/* {genre === '' && <option value='none' />} */}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label
        className={
          genre === '1' ? style['select-label'] : style['select-label__active']
        }
        htmlFor={name}
      >
        {name}:
      </label>
    </Fragment>
  );
};

export default Select;
