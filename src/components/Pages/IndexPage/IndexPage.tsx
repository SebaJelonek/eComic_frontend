import React from 'react';
import VerticalList from '../../Layout/VerticalList/VerticalList';

const IndexPage: React.FC = () => {
  const PROP_ARRAY = [
    { title: 'Big Tree Terry', author: 'Harry Ford', genre: 'Fantasy' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
    { title: 'One more run', author: 'Fuckwit', genre: 'Driving' },
  ];

  return (
    <div>
      <VerticalList comicArray={PROP_ARRAY}></VerticalList>
    </div>
  );
};

export default IndexPage;
