import { useRouter } from 'next/router';

import { electors } from 'data/electors';
import SideNav from 'components/SideNav/SideNav';
import ReviewApplicationTable from 'components/Tables/ReviewApplicationTable';
import LinkButton from 'components/LinkButton/LinkButton';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const ReviewApplication = (): React.ReactElement => {
  const router = useRouter();
  const { electorId } = router.query;
  const elector = electorId
    ? electors.find((elector) => elector.urn === electorId[0])
    : null;

  const displayTable = () => {
    if (elector) {
      return <ReviewApplicationTable elector={elector} />;
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
        <SideNav active="dashboard" />
      </div>
      <div className="govuk-grid-column-three-quarters">
        <h2 className="lbh-header__title govuk-!-margin-bottom-7">
          Review application
        </h2>
        {displayTable()}
        <LinkButton
          label="Add to register"
          route="/verified-applications"
          query={{status: "success"}}
        ></LinkButton>
      </div>
    </div>
  );
};

export default ReviewApplication;
