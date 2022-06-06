import React from 'react';
import Card from '../../Layout/Card/Card';

const IndexPage: React.FC = () => {
  const PROP_ARRAY = [
    { title: 'Big Tree Terry', author: 'Harry Ford', genre: 'Fantasy' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
  ];

  return (
    <div>
      <Card comicArray={PROP_ARRAY}></Card>
    </div>
  );
};

export default IndexPage;
