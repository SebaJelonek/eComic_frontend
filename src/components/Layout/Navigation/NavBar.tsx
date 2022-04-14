import React from 'react';
import { Link } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <div>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  );
};

export default Router;
