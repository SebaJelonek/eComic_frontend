import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Profile.module.css';
import profileImg from './1144709.png';
import { UserContext } from '../../store/UserCredentials/UserContext';

interface Props {
  className: any;
}

const Profile: React.FC<Props> = ({ className }) => {
  const [top, setTop] = useState('-80px');
  const [zIndex, setZIndex] = useState('-10');

  const { isArtist, isAdmin, setIsLoggedIn } = useContext(UserContext);

  const profile = (
    <img
      className={className}
      style={{ width: '50px' }}
      src={profileImg}
      alt='profile icon'
    />
  );

  const onClickHandler = () => {
    if (top === '40px') setTop('-80px');
    if (zIndex === '-10') setZIndex('0');
    if (zIndex === '0') setZIndex('-10');
    if (top === '-80px') setTop('40px');
  };

  return (
    <div className={style['container']}>
      <div className={style['profile-container']} onClick={onClickHandler}>
        {profile}
      </div>
      <ul
        className={style['profile-menu']}
        style={{ top: top, zIndex: zIndex }}
      >
        {!isAdmin && (
          <li className={style['profile-element']}>
            <Link className={style['profile-element__link']} to='/about'>
              About Me
            </Link>
          </li>
        )}
        {isArtist && (
          <li className={style['profile-element']}>
            <Link className={style['profile-element__link']} to='/my-comics'>
              My Comics
            </Link>
          </li>
        )}
        <li className={style['profile-element']}>
          <Link
            onClick={() => {
              setIsLoggedIn(false);
            }}
            className={style['profile-element__link']}
            to='/'
          >
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
