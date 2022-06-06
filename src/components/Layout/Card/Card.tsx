import React from 'react';
import style from './Card.module.css';

interface Props {
  comicArray: {
    title: string;
    author: string;
    genre: string;
  }[];
}

const Card: React.FC<Props> = ({ comicArray }) => {
  return (
    <div>
      <div className={style['card-container']}>
        {comicArray.map((element) => (
          <div className={style['card']} key={Math.random()}>
            <h3>{element.author}</h3>
            <h4>{element.title}</h4>
            <h4>{element.genre}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
