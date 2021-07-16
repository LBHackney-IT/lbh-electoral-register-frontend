import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import cx from 'classnames';
import styles from './PdfViewer.module.scss';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  file: {
    url: string;
  };
}

const PdfViewer = ({ file }: Props): JSX.Element => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <Document file={file.url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div
        className={cx(
          'page-controls lbh-simple-pagination govuk-!-margin-top-3',
          styles.pageControls
        )}
      >
        <button className="lbh-simple-pagination__link" onClick={prevPage}>
          <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
            <path d="M10 1L2 9.5L10 18" strokeWidth="2" />
          </svg>
        </button>
        <p
          className={cx(
            'lbh-simple-pagination__link page-indicator',
            styles.pageNumbers
          )}
        >
          {pageNumber} of {numPages}
        </p>
        <button
          className="lbh-simple-pagination__link lbh-simple-pagination__link--next"
          onClick={nextPage}
          data-testid="next-button"
        >
          <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
            <path d="M1 18L9 9.5L1 1" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
