import React from 'react';
import style from './VerticalList.module.css';
import Card from '../Card/Card';

interface Props {
  comicArray?: {
    _id: string;
    title: string;
    author: string;
    genre: string;
    pdfFileID: string;
    thumbnailID: string;
  }[];
}

const VerticalList: React.FC<Props> = ({ comicArray }) => {
  return (
    <div className={style['card-container']}>
      {comicArray && comicArray.length > 0 ? (
        comicArray.map(({ title, author, genre, _id, thumbnailID }) => (
          <Card key={_id}>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <h4>{genre}</h4>
            <img
              src={`http://localhost:1337/api/get-img/${thumbnailID}`}
              alt=''
            />
          </Card>
        ))
      ) : (
        <Card>It is empty</Card>
      )}
    </div>
  );
};

export default VerticalList;
