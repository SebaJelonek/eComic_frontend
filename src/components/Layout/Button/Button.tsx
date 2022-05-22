import React from 'react';
import style from './Button.module.css';

interface Props {
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type: 'success' | 'failure' | '';
}

const Button: React.FC<Props> = ({ text, type, onButtonClick }) => {
  return (
    <button
      onClick={onButtonClick}
      className={style[type] + ' ' + style['default']}
    >
      {text}
    </button>
  );
};

export default Button;
