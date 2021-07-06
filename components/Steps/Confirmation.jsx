import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Summary from 'components/Summary/Summary';

const ConfirmationStep = ({
  formData,
  formSteps,
  formPath,
  successMessage,
}) => {
  const router = useRouter();
  const { ref } = router.query;
  if (!formSteps) return null;
  return (
    <div>
      <div className="lbh-page-announcement">
        <h1 className="lbh-page-announcement__title">
          {successMessage || 'Submission complete'}
        </h1>
        {ref && (
          <div className="lbh-page-announcement__content">
            Your reference code
            <br />
            <strong>{ref}</strong>
          </div>
        )}
      </div>
      <Summary formData={formData} formPath={formPath} formSteps={formSteps} />
    </div>
  );
};

ConfirmationStep.propTypes = {
  formData: PropTypes.shape({}).isRequired,
  formSteps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  formPath: PropTypes.string.isRequired,
  successMessage: PropTypes.string,
};

export default ConfirmationStep;
