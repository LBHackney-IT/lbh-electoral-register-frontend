import { electors } from 'data/electors';
import { useRouter } from 'next/router';
import ViewElectorTable from 'components/Tables/ViewElectorTable';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import SideNav from 'components/SideNav/SideNav';
import ConfirmationBanner from 'components/ConfirmationBanner/ConfirmationBanner';

const ViewElector = (): React.ReactElement => {
  const router = useRouter();
  const { electorId } = router.query;
  const elector = electorId
    ? electors.find((elector) => elector.urn === electorId[0])
    : null;

  const displayTable = () => {
    if (elector) {
      return <ViewElectorTable elector={elector} />;
    } else {
      return (
        <ErrorMessage
          label="Error: Elector ID is invalid."
          className="govuk-!-margin-top-3"
        />
      );
    }
  };

  const displayConfirmation = () => {
    if (elector) {
      const fieldChanged =
        router.query.edit === 'name' ? 'Name' : 'Open register preference';
      const message =
        router.query.edit === 'name'
          ? `Changed from ${elector.first_name} ${elector.last_name} to {new name}`
          : 'Elector is no longer included in the open register';
      return (
        <ConfirmationBanner
          title={`${fieldChanged} updated successfully`}
          content={message}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-quarter">
        <SideNav active="search" />
      </div>
      <div className="govuk-grid-column-three-quarters">
        {router.query.status === 'success' && displayConfirmation()}
        {displayTable()}
      </div>
    </div>
  );
};

export default ViewElector;
