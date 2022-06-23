import React, { Fragment } from 'react';
import Card from '../Card/Card';
import style from './VerticalListCard.module.css';

interface Props {
  children: React.ReactNode;
  title?: string;
  author?: string;
  transition?: string;
}

const VerticalListCard: React.FC<Props> = ({
  children,
  transition,
  title,
  author,
}) => {
  return (
    <Fragment>
      <div style={{ transition: transition }} className={style['card']}>
        {children}
      </div>
      <Card cursor='pointer' className={style['card-pop-menu']}>
        <h3 className={style['pop-menu']}>{title}</h3>
        <p>By</p>
        <h3>{author}</h3>
      </Card>
    </Fragment>
  );
};

export default VerticalListCard;
