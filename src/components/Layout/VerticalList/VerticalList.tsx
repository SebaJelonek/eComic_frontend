import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from './VerticalList.module.css';
import Card from '../Card/Card';

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
              to={`/reader/${pdfFileID}`}
            >
              <Card transition={cardStyle}>
                <h3 style={{ transition: cardStyle }}>{title}</h3>
                <h4 style={{ transition: cardStyle }}>{author}</h4>
                <img
                  style={{ width: '250px' }}
                  src={`http://localhost:1337/api/file/${thumbnailID}`}
                  alt='comic thumbnail'
                />
              </Card>
            </Link>
          ))
        ) : (
          <Card>It is empty</Card>
        )}
      </div>
    </Fragment>
  );
};

export default VerticalList;
