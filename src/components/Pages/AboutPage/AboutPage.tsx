import React, { useContext } from 'react';
import { UserContext } from '../../store/UserCredentials/UserContext';

const AboutPage: React.FC = () => {
  const { name } = useContext(UserContext);

  return <div>Hello again {name}</div>;
};

export default AboutPage;
