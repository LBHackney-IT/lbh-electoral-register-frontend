import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { electors } from 'data/electors';
import SideNav from 'components/SideNav/SideNav';
import ConfirmationBanner from 'components/ConfirmationBanner/ConfirmationBanner';
import Button from 'components/Button/Button';
import VerifiedApplicationsTable from 'components/Tables/VerifiedApplicationsTable';

const ReviewVerifiedApplications = (): React.ReactElement => {
  const router = useRouter();
  const [numAdded, setNumAdded] = useState(0);

  const addAll = () => {
    setNumAdded(electors.length);
  };

  const onAdd = () => {
    setNumAdded(1);
  };

  useEffect(() => {
    if (numAdded <= 1 && router.query.status === 'success') {
      setNumAdded(1);
      window.history.replaceState(null, '', '/verified-applications');
    }
  }, [numAdded, router.query.status]);

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-quarter">
        <SideNav active="dashboard" />
      </div>
      <div className="govuk-grid-column-three-quarters">
        <h2 className="lbh-header__title govuk-!-margin-bottom-5">
          Verified Applications
        </h2>
        {numAdded > 0 && (
          <ConfirmationBanner
            title={
              numAdded === 1
                ? 'Application successfully added to the electoral register'
                : `${numAdded} applications successfully added to the electoral register`
            }
          />
        )}
        <div className="text-align-right">
          <Button
            label="Add all to register"
            onClick={addAll}
            className="govuk-!-margin-top-0"
          />
        </div>
        <VerifiedApplicationsTable electors={electors} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ReviewVerifiedApplications;
