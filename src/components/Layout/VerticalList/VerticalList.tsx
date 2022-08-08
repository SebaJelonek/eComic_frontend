import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './VerticalList.module.css';
import Card from '../Card/Card';
import VerticalListCard from '../VarticalListCard/VerticalListCard';
import Chevron from '../Chevron/Chevron';

interface Props {
  comics?: {
    _id: string;
    title: string;
    author: string;
    genre: string;
    pdfFileID: string;
    thumbnailID: string;
  }[];
}

const VerticalList: React.FC<Props> = ({ comics }) => {
  const cardStyle = 'all 175ms ease-in';
  const [marginLeft, setMarginLeft] = useState(0);

  const moveComicLeft = () => {
    setMarginLeft(marginLeft - 2565.5);
  };

  const moveComicRight = () => {
    if (marginLeft === 0) setMarginLeft(0);
    setMarginLeft(marginLeft + 2565.5);
  };

  return (
    <Fragment>
      <h2 className={style['list-title']}>{comics && comics[0].genre}</h2>
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
                  title={title}
                  author={author}
                  transition={cardStyle}
                >
                  <img
                    className={style['comic-img']}
                    src={`http://localhost:1337/api/file/${thumbnailID}`}
                    alt='comic thumbnail'
                  />
                </VerticalListCard>
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
