import React, { useState } from 'react';

export const TodoContext = React.createContext({});

const EComicContext: React.FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [text, setText] = useState('Hello world');

  return <div></div>;
};

export default EComicContext;
