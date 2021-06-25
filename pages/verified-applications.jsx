import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import electors from 'data/electors';
import SideNav from 'components/SideNav/SideNav';
import ConfirmationBanner from 'components/ConfirmationBanner/ConfirmationBanner';
import Button from 'components/Button/Button';
import VerifiedApplicationsTable from 'components/Tables/VerifiedApplicationsTable';

const ReviewVerifiedApplications = () => {
  const router = useRouter();
  const [numAdded, setNumAdded] = useState(0);

  const addAll = () => {
    setNumAdded(electors.length);
  };

  const onAdd = () => {
    setNumAdded(1);
  };

  useEffect(() => {
    if (numAdded > 1) {
    } else if (router.query.state === 'success') {
      setNumAdded(1);
      window.history.replaceState(null, '', '/verified-applications');
    }
  });

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-quarter">
        <SideNav active="dashboard" />
      </div>
      <div className="govuk-grid-column-three-quarters">
        <h2 className="lbh-header__title govuk-!-margin-bottom-5">
          Verified Applications
        </h2>
        <ConfirmationBanner num={numAdded} />
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
