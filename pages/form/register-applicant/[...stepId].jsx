import React, { useState } from 'react';
import uuid from "react-uuid";
import FormWizard from "components/FormWizard/FormWizard";
import form from "data/forms/register-applicant";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const RegisterApplicant = () => {
  const currentDateTime = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + " " + time;
  };

  const processFormData = async (formData) => {
    formData.urn = uuid();
    formData.time_created = currentDateTime();  
  };

  const onFormSubmit = (formData) => processFormData(formData);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  return (
    <div id="columns">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <a className="govuk-back-link lbh-back-link govuk-!-margin-bottom-6" href='/'>
            Back to dashboard
          </a>
          <FormWizard
            formPath={form.path}
            formSteps={form.steps}
            title={form.title}
            defaultValues={form.defaultValues}
            onFormSubmit={onFormSubmit}
            successMessage={"Application successfully submitted to DWP for verification"}
          />
        </div>
        <div className="govuk-grid-column-one-half reference-image sticky">
          <Document
            file="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/931882/Register-to-vote-if-youre-living-in-England.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="page-controls lbh-simple-pagination govuk-!-margin-top-3">
            <button 
              className="lbh-simple-pagination__link" 
              onClick={prevPage} 
            >
              <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
                <path d="M10 1L2 9.5L10 18" stroke-width="2" />
              </svg>
            </button>
            <p className="lbh-simple-pagination__link page-indicator">{pageNumber} of {numPages}</p>
            <button
              className="lbh-simple-pagination__link lbh-simple-pagination__link--next"
              onClick={nextPage}
            >
              <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
                <path d="M1 18L9 9.5L1 1" stroke-width="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterApplicant;
