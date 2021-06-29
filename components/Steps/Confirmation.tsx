import { useRouter } from 'next/router';

import Summary from 'components/Summary/Summary';
import { FormStep } from 'components/Form/types';

interface Props {
  formData: Record<string, unknown>;
  formSteps: FormStep[];
  formPath: string;
  successMessage?: string;
  isSummaryCollapsable?: boolean;
}

const ConfirmationStep = ({
  formData,
  formSteps,
  formPath,
  successMessage,
  isSummaryCollapsable,
}: Props): React.ReactElement => {
  const router = useRouter();
  const { ref } = router.query;
  return (
    <div>
      <section className="lbh-page-announcement">
        <h3 className="lbh-page-announcement__title">
          {successMessage || 'Submission complete'}
        </h3>
        {ref && (
          <div className="lbh-page-announcement__content">
            Your reference code
            <br />
            <strong>{ref}</strong>
          </div>
        )}
      </section>
      <Summary
        formData={formData}
        formPath={formPath}
        formSteps={formSteps}
        isSummaryCollapsable={isSummaryCollapsable}
      />
    </div>
  );
};

export default ConfirmationStep;
