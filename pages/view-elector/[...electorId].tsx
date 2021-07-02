import { Elector } from 'types';
import { electors } from 'data/electors';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ViewElectorTable from 'components/Tables/ViewElectorTable';
import LinkButton from 'components/LinkButton/LinkButton';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import SideNav from 'components/SideNav/SideNav';

const ViewElector = (): React.ReactElement => {
  const router = useRouter();
  const { electorId } = router.query;

  const displayTable = () => {
    if (electorId) {
      const elector = electors.find((elector) => elector.urn === electorId[0]);
      if (elector) {
        return <ViewElectorTable elector={elector} />;
      }
    } else {
      return (
        <ErrorMessage
          label="Error: Elector ID is invalid."
          className="govuk-!-margin-top-3"
        />
      );
    }
  };

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-quarter">
        <SideNav active="search" />
      </div>
      <div className="govuk-grid-column-three-quarters">{displayTable()}</div>
    </div>
  );
};

export default ViewElector;
