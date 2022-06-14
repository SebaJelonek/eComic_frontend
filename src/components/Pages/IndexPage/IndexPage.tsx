import React, { useEffect, useState } from 'react';
import VerticalList from '../../Layout/VerticalList/VerticalList';

interface Fetch {
  comicArray: {
    _id: string;
    title: string;
    author: string;
    genre: string;
    pdfFileID: string;
    thumbnailID: string;
  }[];
}

const IndexPage: React.FC = () => {
  const [comicArray, setComicArray] = useState<Fetch['comicArray']>();

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
      setComicArray(response.comic);
    });
  }, []);

  return (
    <div>
      <VerticalList comicArray={comicArray}></VerticalList>
    </div>
  );
};

export default IndexPage;
