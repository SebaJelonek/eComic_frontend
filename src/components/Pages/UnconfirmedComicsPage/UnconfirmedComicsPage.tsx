import React, { useEffect, useContext } from 'react';
import VerticalList from '../../Layout/VerticalList/VerticalList';
import { UserContext } from '../../store/UserCredentials/UserContext';

const UnconfirmedComics: React.FC = () => {
  const { unconfirmedComics, setUnconfirmedComics } = useContext(UserContext);

  useEffect(() => {
    const unConfirmedComicsList = () => {
      const fetchData = async () => {
        const response = await fetch(
          'https://ecomic-backend.onrender.com/api/unconfirmed-comics',
          {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        return response.json();
      };
      const res = fetchData();
      res.then(({ unConfirmedComicList }) => {
        setUnconfirmedComics(unConfirmedComicList);
        console.log(unConfirmedComicList);
      });
    };
    unConfirmedComicsList();
  }, [setUnconfirmedComics]);

  return (
    <div>
      {unconfirmedComics !== undefined && (
        <VerticalList
          isConfirmed={false}
          comicCount={unconfirmedComics.length}
          comics={unconfirmedComics}
        />
      )}
    </div>
  );
};

export default UnconfirmedComics;
