import React, { Fragment, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Button from '../Button/Button';
import Arrow from '../Arrow/Arrow';
import style from './Reader.module.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Reader: React.FC = () => {
  const [url, setUrl] = useState('');
  const [docHeight, setDocHeight] = useState(700);
  const [pageAmount, setPageAmount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(2);

  useEffect(() => {
    const pdfID = window.location.pathname.toString().split('/');
    setUrl('http://localhost:1337/api/file/' + pdfID[2]);
  }, []);

  const onSuccessfullLoad = (document: any) => {
    setPageAmount(document.numPages);
  };

  const nextPageHandler = () => {
    if (currentPage >= pageAmount) {
      console.log('Current page cannot go beyond actual page number');
    } else {
      setCurrentPage(currentPage + 2);
    }
  };

  const previousPageHandler = () => {
    if (currentPage === 2) {
      console.log('Page cannot be zero or negative');
    } else {
      setCurrentPage(currentPage - 2);
    }
  };

  const documentAddHeightHandler = () => {
    setDocHeight(docHeight + 100);
  };

  const documentSubtractHeightHandler = () => {
    setDocHeight(docHeight - 100);
  };

  return (
    <div>
      <Document onLoadSuccess={onSuccessfullLoad} file={url}>
        <Arrow
          onClickHandler={previousPageHandler}
          height={docHeight}
          orientation='left'
        />
        {pageAmount >= currentPage ? (
          <Fragment>
            <Page height={docHeight} pageNumber={currentPage - 1} />
            <Page height={docHeight} pageNumber={currentPage} />
          </Fragment>
        ) : (
          <Fragment>
            <Page height={docHeight} pageNumber={currentPage - 1} />
          </Fragment>
        )}
        <Arrow
          onClickHandler={nextPageHandler}
          height={docHeight}
          orientation='right'
        />
      </Document>
      <div className={style['button-container']}>
        <Button
          onButtonClick={documentAddHeightHandler}
          text='+'
          size='small'
          type='success'
        />
        <Button
          onButtonClick={documentSubtractHeightHandler}
          text='-'
          size='small'
          type='success'
        />
      </div>
    </div>
  );
};

export default Reader;
