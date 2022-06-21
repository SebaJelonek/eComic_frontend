import React from 'react';
import style from './Card.module.css';

interface Props {
  children: React.ReactNode;
  onMouseEnterHandler?: any;
  transition?: string;
}

const Card: React.FC<Props> = ({
  children,
  transition,
  onMouseEnterHandler,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnterHandler}
      style={{ transition: transition }}
      className={style['card']}
    >
      {children}
    </div>
  );
};

export default Card;
