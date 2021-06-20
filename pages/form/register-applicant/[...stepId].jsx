import React, { useState } from 'react';
import uuid from "react-uuid";
import FormWizard from "components/FormWizard/FormWizard";
import form from "data/forms/register-applicant";
import { format } from 'date-fns';
import FileViewer from 'components/FileViewer/FileViewer';

const RegisterApplicant = () => {
  const currentDateTime = () => {
    return format(new Date(), "yyyy-MM-dd' 'HH:mm:ss");
  };

  const processFormData = async (formData) => {
    formData.urn = uuid();
    formData.time_created = currentDateTime();  
  };

  const onFormSubmit = (formData) => processFormData(formData);

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
          <FileViewer file={{ url: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/931882/Register-to-vote-if-youre-living-in-England.pdf" }} />
        </div>
      </div>
    </div>
  );
};

export default RegisterApplicant;
