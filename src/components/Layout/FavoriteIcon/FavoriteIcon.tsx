import React, { Fragment } from 'react';
import ICON_OUT_LINE from './favorite_OUTLINE.svg';
import ICON_FILL from './favorite_FILL.svg';
import style from './FavoriteIcon.module.css';

interface Props {
  onClickHandler: React.MouseEventHandler<HTMLImageElement>;
  isFavorite: boolean;
}

const FavoriteIcon: React.FC<Props> = ({ onClickHandler, isFavorite }) => {
  return (
    <Fragment>
      {isFavorite ? (
        <img
          className={`${style['favorite-icon__color']} ${style['favorite-icon__position']}`}
          src={ICON_FILL}
          alt='Heart Icon'
          onClick={onClickHandler}
        />
      ) : (
        <img
          className={`${style['favorite-icon__color']} ${style['favorite-icon__position']}`}
          src={ICON_OUT_LINE}
          alt='Heart Icon'
          onClick={onClickHandler}
        />
      )}
    </Fragment>
  );
};

export default FavoriteIcon;
