import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from './VerticalList.module.css';
import Card from '../Card/Card';
import VerticalListCard from '../VarticalListCard/VerticalListCard';

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

  return (
    <Fragment>
      <h2 className={style['list-title']}>{comics && comics[0].genre}</h2>
      <div className={style['card-container']}>
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
    </Fragment>
  );
};

export default VerticalList;
