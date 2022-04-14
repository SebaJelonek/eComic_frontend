import React from 'react';
import style from './Button.module.css';

interface Props {
  text: string;
  type: 'success' | 'failure' | '';
}

const Button: React.FC<Props> = ({ text, type }) => {
  return (
    <button className={style[type] + ' ' + style['default']}>{text}</button>
  );
};

export default Button;
