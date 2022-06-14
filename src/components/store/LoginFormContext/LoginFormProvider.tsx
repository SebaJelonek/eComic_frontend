import React, { useState } from 'react';
import { FormContext } from './FormContext';

const LoginFormProvider: React.FC = ({ children }) => {
  const [findBy, setFindBy] = useState('');
  const [password, setPassword] = useState('');
  const [reset, setReset] = useState(false);
  const [pdfReset, setPdfReset] = useState(false);
  const [imgReset, setImgReset] = useState(false);
  return (
    <FormContext.Provider
      value={{
        findBy,
        setFindBy,
        password,
        setPassword,
        reset,
        setReset,
        imgReset,
        setImgReset,
        pdfReset,
        setPdfReset,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default LoginFormProvider;
