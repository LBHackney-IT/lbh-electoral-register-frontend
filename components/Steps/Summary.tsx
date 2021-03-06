import React, { useState } from 'react';
import Router from 'next/router';

import Button from 'components/Button/Button';
import { deleteData } from 'utils/saveData';
import Summary from 'components/Summary/Summary';
import ErrorSummary from 'components/ErrorSummary/ErrorSummary';
import { filterDataOnCondition } from 'utils/steps';
import { sanitiseObject } from 'utils/objects';
import { FormStep } from 'components/Form/types';

interface Props {
  formData: Record<string, unknown>;
  formSteps: FormStep[];
  formPath: string;
  onFormSubmit: (filteredData: unknown) => Promise<{ ref?: string } | void>;
  isSummaryCollapsable?: boolean;
}

const SummaryStep = ({
  formData,
  formSteps,
  formPath,
  onFormSubmit,
  isSummaryCollapsable,
}: Props): React.ReactElement => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const onSubmit = async () => {
    setIsSubmitting(true);
    setHasError(false);
    try {
      const data = await onFormSubmit(
        //@ts-ignore TODO fix me
        filterDataOnCondition(formSteps, sanitiseObject(formData))
      );
      deleteData(formPath);
      Router.replace(
        `${formPath}confirmation${data && data.ref ? `?ref=${data.ref}` : ''}`
      );
    } catch {
      setHasError(true);
    }
    setIsSubmitting(false);
  };

  return (
    <div>
      <Summary
        formData={formData}
        formPath={formPath}
        formSteps={formSteps}
        canEdit
        isSummaryCollapsable={isSummaryCollapsable}
      />
      <div style={{ display: 'flex' }}>
        <Button
          className="govuk-button govuk-!-margin-right-1"
          label="Cancel"
          isSecondary
          onClick={() => (window.location.href = '/')}
        />
        <Button
          wideButton
          className="govuk-button"
          label="Submit"
          onClick={onSubmit}
          disabled={isSubmitting}
        />
      </div>
      {hasError && (
        <ErrorSummary
          title="Unfortunately there was a problem with your submission."
          body="Please try again."
        />
      )}
    </div>
  );
};

export default SummaryStep;
