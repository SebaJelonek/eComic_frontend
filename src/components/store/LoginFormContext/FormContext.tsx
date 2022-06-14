import React from 'react';

interface context {
  type: {
    findBy: string;
    setFindBy: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    reset: boolean;
    setReset: React.Dispatch<React.SetStateAction<boolean>>;
    imgReset: boolean;
    setImgReset: React.Dispatch<React.SetStateAction<boolean>>;
    pdfReset: boolean;
    setPdfReset: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const FormContext = React.createContext<context['type']>({
  findBy: '',
  setFindBy: () => {},
  password: '',
  setPassword: () => {},
  reset: false,
  setReset: () => {},
  imgReset: false,
  setImgReset: () => {},
  pdfReset: false,
  setPdfReset: () => {},
});
