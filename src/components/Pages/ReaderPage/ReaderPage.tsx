import React, { Fragment, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useParams } from 'react-router-dom';
import Button from '../../Layout/Button/Button';
import Arrow from '../../Layout/Arrow/Arrow';
import StarRate from '../../Layout/StarRate/StarRate';
import style from './ReaderPage.module.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Reader: React.FC = () => {
  const [url, setUrl] = useState('');
  const [docHeight, setDocHeight] = useState(700);
  const [pageAmount, setPageAmount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(2);
  const params = useParams();
  const author = params.author;
  const title = params.title;

  useEffect(() => {
    setUrl('http://localhost:1337/api/file/' + params.id);
  }, [params.id]);

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
      <h1>{title}</h1>
      <h2>{author}</h2>
      <StarRate />
      <Document onLoadSuccess={onSuccessfullLoad} file={url}>
        <Arrow
          onClickHandler={previousPageHandler}
          height={docHeight}
          orientation='left'
        />
        {pageAmount >= currentPage ? (
          <Fragment>
            <Page height={docHeight} pageNumber={currentPage - 1} />
            <div
              style={{ height: docHeight, borderLeft: 'black solid 2px' }}
            ></div>
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
