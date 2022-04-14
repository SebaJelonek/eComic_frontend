import React from 'react';
import Navigation from './components/Layout/Navigation/Navigation';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import RegisterPage from './components/Pages/RegisterPage/RegisterPage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Navigation />
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <RegisterPage></RegisterPage>
        <div style={{ color: '#282c34' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            asperiores.
          </p>
        </div>
        <LoginPage></LoginPage>
      </header>
    </div>
  );
};

export default App;
