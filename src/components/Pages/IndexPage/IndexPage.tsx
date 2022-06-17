import React, { useEffect, useState } from 'react';
import VerticalList from '../../Layout/VerticalList/VerticalList';

interface Fetch {
  comics: {
    _id: string;
    title: string;
    author: string;
    genre: string;
    pdfFileID: string;
    thumbnailID: string;
  }[];
}

const IndexPage: React.FC = () => {
  const [comics, setComics] = useState<Fetch['comics']>();

  useEffect(() => {
    const res = async () => {
      const response = await fetch(`http://localhost:1337/api/comic-list`, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      });
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
    (element) => element.genre.toLowerCase() === 'futuristic'
  );

  return (
    <div>
      <VerticalList comics={horrors}></VerticalList>
      <VerticalList comics={futuristics}></VerticalList>
    </div>
  );
};

export default IndexPage;
