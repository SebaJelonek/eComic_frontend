import React from 'react';
import Navigation from './components/Layout/Navigation/Navigation';
import UserCredentialsProvider from './components/store/UserCredentials/UserCredentialsProvider';

const App: React.FC = () => {
  return (
    <div className='App'>
      <UserCredentialsProvider>
        <Navigation />
      </UserCredentialsProvider>
    </div>
  );
};

export default App;
