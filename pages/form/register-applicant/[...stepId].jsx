import React, { useState } from 'react';
import { useContext } from "react";
import uuid from "react-uuid";
import FormWizard from "components/FormWizard/FormWizard";
import form from "data/forms/register-applicant";
import { useRouter } from "next/router";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { format } from 'date-fns';
import PdfViewer from 'components/PdfViewer/PdfViewer';

const RegisterApplicant = () => {
  const currentDateTime = () => {
    return format(new Date(), "yyyy-MM-dd' 'HH:mm:ss");
  };

  const processFormData = async (formData) => {
    formData.urn = uuid();
    formData.time_created = currentDateTime();  
    console.log(formData);
    // try {
    //   const response = await postJsonToS3(formData);
    //   console.log("response from form " + response);
    // } catch (e) {
    //   console.log("error" + JSON.stringify(e.response));
    // }
  };

  const onFormSubmit = (formData) => processFormData(formData);
  const router = useRouter();
  const { stepId } = router.query;
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
    if (pageNumber > 1)
    setPageNumber(pageNumber - 1)
  }

  return (
    <div id="columns">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <a className="govuk-back-link lbh-link--no-visited-state govuk-!-margin-bottom-6" href='/'>
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
          <PdfViewer file="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/931882/Register-to-vote-if-youre-living-in-England.pdf" />
        </div>
      </div>
    </div>
  );
};

export default RegisterApplicant;
