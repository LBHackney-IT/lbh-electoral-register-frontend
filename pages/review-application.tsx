import { useRouter } from 'next/router';

import { electors } from 'data/electors';
import SideNav from 'components/SideNav/SideNav';
import ReviewApplicationTable from 'components/Tables/ReviewApplicationTable';
import LinkButton from 'components/LinkButton/LinkButton';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const ReviewApplication = (): React.ReactElement => {
  const router = useRouter();

  const displayTable = () => {
    if (typeof router.query.electorId === 'string') {
      const electorId = parseInt(router.query.electorId);
      const elector = electors[electorId];
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
          status="success"
        ></LinkButton>
      </div>
    </div>
  );
};

export default ReviewApplication;
