import React from 'react';
import style from './Card.module.css';

interface Props {
  children: React.ReactNode;
  transition?: string;
}

const Card: React.FC<Props> = ({ children, transition }) => {
  return (
    <div style={{ transition: transition }} className={style['card']}>
      {children}
    </div>
  );
};

export default Card;
