import React, { Fragment, useContext } from 'react';
import Card from '../Card/Card';
import style from './VerticalListCard.module.css';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import { UserContext } from '../../store/UserCredentials/UserContext';
import Button from '../Button/Button';

interface Props {
  thumbNailId: string;
  comicId: string;
  isConfirmed: boolean;
  title?: string;
  author?: string;
  transition?: string;
}

const VerticalListCard: React.FC<Props> = ({
  comicId,
  thumbNailId,
  isConfirmed,
  transition,
  title,
  author,
}) => {
  const {
    userId,
    setFavoriteComicList,
    favoriteComicList,
    setUnconfirmedComics,
  } = useContext(UserContext);
  //
  const addToFavorite = (e: any) => {
    e.preventDefault();
    const favorite = async () => {
      const response = await fetch(
        `https://ecomic-backend.onrender.com/api/user/add-favorite`,
        {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ comicId, userId }),
        }
      );
      return response.json();
    };
    const res = favorite();

    res.then(({ message, favoriteList }) => {
      console.log(message);
      setFavoriteComicList(favoriteList);
    });
  };

  const acceptComic = (e: any) => {
    e.preventDefault();
    const reject = async () => {
      const response = await fetch(
        'https://ecomic-backend.onrender.com/api/confirm-comic',
        {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ comicId }),
        }
      );
      return response.json();
    };
    const response = reject();

    response.then(({ msg, unConfirmedComicList }) => {
      setUnconfirmedComics(unConfirmedComicList);
      console.log(msg);
      console.log(unConfirmedComicList);
    });
  };

  const rejectComic = (e: any) => {
    e.preventDefault();
    const reject = async () => {
      const response = await fetch(
        'https://ecomic-backend.onrender.com/api/reject-comic',
        {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ msg: 'hi!' }),
        }
      );
      return response.json();
    };
    const response = reject();

    response.then((res) => {
      console.log(res);
    });
  };

  return (
    <Fragment>
      {isConfirmed ? (
        <Fragment>
          <div style={{ transition: transition }} className={style['card']}>
            <img
              className={style['comic-img']}
              src={`https://ecomic-backend.onrender.com/api/file/${thumbNailId}`}
              alt='comic thumbnail'
            />
          </div>
          <Card cursor='pointer' className={style['card-pop-menu']}>
            <h3 className={style['pop-menu']}>{title}</h3>
            <p>By</p>
            <h3>{author}</h3>
            <FavoriteIcon
              isFavorite={favoriteComicList.includes(comicId) ? true : false}
              onClickHandler={addToFavorite}
            />
          </Card>
        </Fragment>
      ) : (
        <Fragment>
          <div style={{ transition: transition }} className={style['card']}>
            <div>
              <h3 className={style['pop-menu']}>{title}</h3>
              <p>By</p>
              <h3>{author}</h3>
              <img
                className={style['comic-img']}
                src={`https://ecomic-backend.onrender.com/api/file/${thumbNailId}`}
                alt='comic thumbnail'
              />
            </div>
            <div className={style['flex-container__btn']}>
              <Button
                text='Accept'
                size='small'
                type='success'
                onButtonClick={acceptComic}
              />
              <Button
                text='Reject'
                size='small'
                type='failure'
                onButtonClick={rejectComic}
              />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default VerticalListCard;
