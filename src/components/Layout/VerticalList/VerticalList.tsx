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
  return (
    <Fragment>
      <h2>{comics && comics[0].genre}</h2>
      <div className={style['card-container']}>
        {comics && comics.length > 0 ? (
          comics.map(
            ({ title, author, genre, _id, pdfFileID, thumbnailID }) => (
              <Link key={_id} to={`/reader/${pdfFileID}`}>
                <Card>
                  <h3>{title}</h3>
                  <h4>{author}</h4>
                  <img
                    style={{ width: '250px' }}
                    src={`http://localhost:1337/api/file/${thumbnailID}`}
                    alt=''
                  />
                </Card>
              </Link>
            )
          )
        ) : (
          <Card>It is empty</Card>
        )}
      </div>
    </Fragment>
  );
};

export default VerticalList;
