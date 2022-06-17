import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import style from './Reader.module.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Reader: React.FC = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const pdfID = window.location.pathname.toString().split('/');
    setUrl('http://localhost:1337/api/file/' + pdfID[2]);
  }, []);

  return (
    <Document file={url}>
      <Page pageNumber={1} />
      {/* <Page pageNumber={4} /> */}
    </Document>
  );
};

export default Reader;
