import { useRouter } from 'next/router';

import { electors } from 'data/electors';
import SideNav from 'components/SideNav/SideNav';
import ReviewApplicationTable from 'components/Tables/ReviewApplicationTable';
import LinkButton from 'components/LinkButton/LinkButton';

const ReviewApplication = () => {
  const router = useRouter();
  const electorId = parseInt(router.query.state);
  const elector = electors[electorId];

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-quarter">
        <SideNav active="dashboard" />
      </div>
      <div className="govuk-grid-column-three-quarters">
        <h2 className="lbh-header__title govuk-!-margin-bottom-7">
          Review application
        </h2>
        <ReviewApplicationTable elector={elector} />
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
