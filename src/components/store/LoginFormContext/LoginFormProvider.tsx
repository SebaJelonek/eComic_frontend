import React, { useState } from 'react';
import { FormContext } from './FormContext';

const LoginFormProvider: React.FC = ({ children }) => {
  const [findBy, setFindBy] = useState('');
  const [password, setPassword] = useState('');
  const [reset, setReset] = useState(false);

  return (
    <FormContext.Provider
      value={{ findBy, setFindBy, password, setPassword, reset, setReset }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default LoginFormProvider;
