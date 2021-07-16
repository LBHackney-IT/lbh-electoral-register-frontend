import { isValidElement, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import cx from 'classnames';
import { useRouter } from 'next/router';

import Button from 'components/Button/Button';
import DynamicInput from 'components/FormWizard/DynamicInput';
import DynamicInputMulti from 'components/FormWizard/DynamicInputMulti';
import ErrorSummary from 'components/ErrorSummary/ErrorSummary';

import styles from './DynamicStep.module.scss';

const DynamicStep = ({
  isMulti,
  stepId,
  components,
  formData,
  onStepSubmit,
}) => {
  const router = useRouter();
  const { handleSubmit, register, control, errors, setValue, watch } = useForm({
    defaultValues: formData,
  });
  const stepValues = watch();
  const currentData = {
    ...formData,
    ...stepValues,
  };
  const multiStepPrefix =
    isMulti && `${stepId[0]}[${parseInt(stepId[1]) - 1 || 0}]`;
  const sanitiseData = useCallback(
    (data) => ({
      ...components
        .filter(({ isMulti }) => isMulti)
        .reduce((acc, { name }) => ({ ...acc, [name]: undefined }), {}),
      ...data,
    }),
    [components]
  );
  if (!register) {
    return null;
  }

  const onBack = () => {
    router.back();
  };

  const errorMessages = {
    first_name: {
      text: 'First name is blank',
      href: '#first_name',
    },
    last_name: {
      text: 'Last name is blank',
      href: '#last_name',
    },
    address_ln1: {
      text: 'Address is blank',
      href: '#address_ln1',
    },
    postcode: {
      text: 'Postcode is blank',
      href: '#postcode',
    },
    lives_at_another_address: {
      text: 'No value is selected indicating whether or not the elector lives at another address',
      href: '#lives_at_another_address',
    },
    moved_house: {
      text: 'No value is selected indicating whether the elector moved house in the last 12 months',
      href: '#moved_house',
    },
  };

  const displayErrors = () => {
    let counter = 0;
    for (const error in errors) {
      counter += 1;
    }
    if (counter > 0) {
      let links = [];
      for (const error in errors) {
        links.push(errorMessages[error]);
      }
      return (
        <ErrorSummary title="There is a problem" links={links}></ErrorSummary>
      );
    }
  };

  return (
    <>
      <form
        role="form"
        onSubmit={handleSubmit((data) => onStepSubmit(sanitiseData(data)))}
      >
        {displayErrors()}
        <div className="govuk-form-group">
          {components?.map(
            ({
              conditionalRender,
              showConditionalGuides,
              name,
              isMulti: isComponentMulti,
              ...componentProps
            }) => {
              if (isValidElement(componentProps)) {
                return componentProps;
              }
              if (conditionalRender && !conditionalRender(currentData)) {
                return null;
              }
              const inputName = multiStepPrefix
                ? `${multiStepPrefix}.${name}`
                : name;
              const sharedProps = {
                key: inputName,
                name: inputName,
                register: register,
                control: control,
                errors: errors,
                currentData: currentData,
                ...componentProps,
              };
              return (
                <div
                  key={inputName}
                  className={cx('govuk-form-group', {
                    [styles.withConditionalGuides]:
                      conditionalRender && showConditionalGuides,
                  })}
                >
                  {isComponentMulti ? (
                    <DynamicInputMulti
                      {...sharedProps}
                      initialInputData={formData[name]}
                      onDelete={(updatedValue) =>
                        setValue(inputName, updatedValue)
                      }
                    />
                  ) : (
                    <DynamicInput {...sharedProps} />
                  )}
                </div>
              );
            }
          )}
        </div>
        {isMulti && (
          <Button
            isSecondary
            label="Add another"
            type="button"
            onClick={() =>
              handleSubmit((data) => onStepSubmit(sanitiseData(data), true))()
            }
          />
        )}
        <div>
          <Button
            className="govuk-!-margin-right-1"
            isSecondary
            label="Back"
            type="button"
            onClick={onBack}
          />
          <Button
            className="govuk-!-margin-right-1"
            label="Continue"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

DynamicStep.propTypes = {
  stepId: PropTypes.array,
  components: PropTypes.array,
  onStepSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  isMulti: PropTypes.bool,
};

export default DynamicStep;
