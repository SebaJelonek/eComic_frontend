import React from 'react';
import style from './VerticalList.module.css';
import Card from '../Card/Card';

interface Props {
  comicArray: {
    title: string;
    author: string;
    genre: string;
  }[];
}

const VerticalList: React.FC<Props> = ({ comicArray }) => {
  return (
    <div className={style['card-container']}>
      {comicArray.map(({ title, author, genre }) => (
        <Card key={Math.random()}>
          <h3>{title}</h3>
          <h4>{author}</h4>
          <h4>{genre}</h4>
        </Card>
      ))}
    </div>
  );
};

export default VerticalList;
