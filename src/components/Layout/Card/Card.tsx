import React from 'react';
import style from './Card.module.css';

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className={style['card']}>{children}</div>;
};

export default Card;
