import React, { useContext, useEffect, useState } from 'react';
import Card from '../../Layout/Card/Card';
import { UserContext } from '../../store/UserCredentials/UserContext';

interface Fetch {
  comicCollection: {
    __v: number;
    _id: string;
    author: string;
    genre: string;
    pdfFileID: string;
    thumbnailID: string;
    title: string;
    userEmail: string;
  }[];
}

const UserComicCollectionPage: React.FC = () => {
  const { email } = useContext(UserContext);
  const [comicCollection, setComicCollection] =
    useState<Fetch['comicCollection']>();
  useEffect(() => {
    const res = async () => {
      const response = await fetch(
        `https://ecomic-backend.onrender.com/api/comic-collection/${email}`,
        {
          method: 'GET',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return response.json();
    };
    res().then(({ comicCollection }) => {
      setComicCollection(comicCollection);
    });
  }, [setComicCollection, email]);

  return (
    <div>
      <h2>Comics uploaded by you</h2>
      {comicCollection &&
        comicCollection.map(({ genre, _id, author, thumbnailID, title }) => (
          <Card key={_id} cursor='default'>
            <h1>{genre}</h1>
            <div>
              <h2>{author}</h2>
              <h2>{title}</h2>
              <div style={{ width: '95%', margin: '0 auto' }}>
                <img
                  src={`https://ecomic-backend.onrender.com/api/file/${thumbnailID}`}
                  alt='comic thumbnail'
                />
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default UserComicCollectionPage;
