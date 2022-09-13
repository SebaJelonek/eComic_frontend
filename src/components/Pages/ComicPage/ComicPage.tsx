import React, { useEffect, useState } from 'react';
import VerticalList from '../../Layout/VerticalList/VerticalList';

interface FetchedData {
  comics: {
    _id: string;
    title: string;
    author: string;
    genre: string;
    pdfFileID: string;
    thumbnailID: string;
    isConfirmed: boolean;
  }[];
}

const IndexPage: React.FC = () => {
  const [comics, setComics] = useState<FetchedData['comics']>();

  useEffect(() => {
    const res = async () => {
      const response = await fetch(
        `https://ecomic-backend.onrender.com/api/comic-list`,
        {
          method: 'GET',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return response.json();
    };
    res().then((response) => {
      setComics(response.comic);
    });
  }, []);

  const horrors = comics?.filter(
    (element) => element.genre.toLowerCase() === 'horror'
  );
  const futuristics = comics?.filter(
    (element) =>
      element.genre.toLowerCase() === 'futuristic' &&
      element.isConfirmed === true
  );
  console.log(futuristics);

  return (
    <>
      {horrors !== undefined && (
        <VerticalList
          isConfirmed={true}
          comicCount={horrors?.length}
          comics={horrors}
        />
      )}
      {futuristics !== undefined && futuristics?.length > 0 ? (
        <VerticalList
          isConfirmed={true}
          comicCount={futuristics.length}
          comics={futuristics}
        />
      ) : null}
    </>
  );
};

export default IndexPage;
