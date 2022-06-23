import React from 'react';
import style from './Card.module.css';

interface Props {
  children: React.ReactNode;
  cursor: 'pointer' | 'default';
  className?: any;
}

const Card: React.FC<Props> = ({ children, className, cursor }) => {
  return (
    <div style={{ cursor }} className={`${style['card']} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
