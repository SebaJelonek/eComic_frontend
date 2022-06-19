import React from 'react';
import style from './Button.module.css';

interface Props {
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type: 'success' | 'failure';
  size?: 'big' | 'regular' | 'small';
}

const Button: React.FC<Props> = ({ text, type, onButtonClick, size }) => {
  if (size === undefined) size = 'regular';

  return (
    <button onClick={onButtonClick} className={`${style[type]} ${style[size]}`}>
      {text}
    </button>
  );
};

export default Button;
