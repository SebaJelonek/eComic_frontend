import React, { Fragment, useState } from 'react';
import StarOut from './star_FILL0.svg';
import StarFill from './star_FILL1.svg';
import style from './StarRate.module.css';

const rate = async (rating: number, url: string) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rating }),
  });

  return response.json();
};

const StarRate: React.FC = () => {
  const [rating, setRating] = useState(0);

  const onClickHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    if (e.currentTarget.id.includes('one')) {
      setRating(1);
      rate(rating, 'wp.pl');
    }
    if (e.currentTarget.id.includes('two')) {
      setRating(2);
      rate(rating, 'wp.pl');
    }
    if (e.currentTarget.id.includes('three')) {
      setRating(3);
      rate(rating, 'wp.pl');
    }
    if (e.currentTarget.id.includes('four')) {
      setRating(4);
      rate(rating, 'wp.pl');
    }
    if (e.currentTarget.id.includes('five')) {
      setRating(5);
      rate(rating, 'wp.pl');
    }
  };

  return (
    <Fragment>
      <img className={style['star-out']} src={StarOut} alt='Rating Star' />
      <img className={style['star-out']} src={StarOut} alt='Rating Star' />
      <img className={style['star-out']} src={StarOut} alt='Rating Star' />
      <img className={style['star-out']} src={StarOut} alt='Rating Star' />
      <img className={style['star-out']} src={StarOut} alt='Rating Star' />
      <img
        onClick={onClickHandler}
        id={style['five']}
        src={StarFill}
        alt='Rating Star'
      />
      <img
        onClick={onClickHandler}
        id={style['four']}
        src={StarFill}
        alt='Rating Star'
      />
      <img
        onClick={onClickHandler}
        id={style['three']}
        src={StarFill}
        alt='Rating Star'
      />
      <img
        onClick={onClickHandler}
        id={style['two']}
        src={StarFill}
        alt='Rating Star'
      />
      <img
        onClick={onClickHandler}
        id={style['one']}
        src={StarFill}
        alt='Rating Star'
      />
    </Fragment>
  );
};

export default StarRate;
