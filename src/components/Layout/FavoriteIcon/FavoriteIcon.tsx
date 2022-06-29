import React, { Fragment } from 'react';
import ICON_OUT_LINE from './favorite_OUTLINE.svg';
import ICON_FILL from './favorite_FILL.svg';
import style from './FavoriteIcon.module.css';

const FavoriteIcon: React.FC = () => {
  return (
    <Fragment>
      <img
        className={`${style['favorite-icon__color__fill']} ${style['favorite-icon__position']}`}
        src={ICON_FILL}
        alt=''
      />
      <img
        className={`${style['favorite-icon__color']} ${style['favorite-icon__position']}`}
        src={ICON_OUT_LINE}
        alt=''
      />
    </Fragment>
  );
};

export default FavoriteIcon;
