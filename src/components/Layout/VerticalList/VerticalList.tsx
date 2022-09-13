import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './VerticalList.module.css';
import Card from '../Card/Card';
import VerticalListCard from '../VarticalListCard/VerticalListCard';
import Chevron from '../Chevron/Chevron';

interface Props {
  comics: {
    _id: string;
    title: string;
    author: string;
    genre: string;
    pdfFileID: string;
    thumbnailID: string;
  }[];
  comicCount: number | undefined;
  isConfirmed: boolean;
}

const VerticalList: React.FC<Props> = ({ comics, comicCount, isConfirmed }) => {
  const cardStyle = 'all 175ms ease-in';
  const [marginLeft, setMarginLeft] = useState(0);

  const moveComicRight = () => {
    if (typeof comicCount === 'number' && comicCount)
      setMarginLeft(marginLeft - 1598.52);
  };

  const moveComicLeft = () => {
    marginLeft === 0 ? setMarginLeft(0) : setMarginLeft(marginLeft + 1598.52);
  };

  return (
    <Fragment>
      <h2 className={style['list-title']}>
        {comics.length > 0 ? comics[0].genre : ''}
      </h2>
      <div className={style['container']}>
        <Chevron onClickHandler={moveComicLeft} orientation='left' />
        <div style={{ marginLeft }} className={style['card-container']}>
          {comics && comics.length > 0 ? (
            comics.map(({ title, author, _id, pdfFileID, thumbnailID }) => (
              <Link
                className={style['list-link']}
                key={_id}
                to={`/reader/${pdfFileID}/${author}/${title}`}
              >
                <VerticalListCard
                  isConfirmed={isConfirmed}
                  title={title}
                  author={author}
                  transition={cardStyle}
                  comicId={_id}
                  thumbNailId={thumbnailID}
                />
              </Link>
            ))
          ) : (
            <Card cursor='default'>It is empty</Card>
          )}
        </div>
        <Chevron onClickHandler={moveComicRight} orientation='right' />
      </div>
    </Fragment>
  );
};

export default VerticalList;
