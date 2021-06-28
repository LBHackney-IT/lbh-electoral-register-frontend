import SideNav from 'components/SideNav/SideNav';

const Dashboard = (): JSX.Element => (
  <div className="govuk-grid-row">
    <div className="govuk-grid-column-one-quarter">
      <SideNav active="dashboard" />
    </div>
    <div className="govuk-grid-column-three-quarters">
      <div className="govuk-grid-row govuk-!-margin-bottom-7">
        <div className="govuk-grid-column-one-third">
          <a href="/">
            <div className="lbh-stat hover-darker-grey">
              <strong
                className="lbh-stat__value"
                aria-labelledby="stat-1-caption"
              >
                6
              </strong>
              <span className="lbh-stat__caption" id="stat-1-caption">
                Applications awaiting verification
              </span>
            </div>
          </a>
        </div>
        <div className="govuk-grid-column-one-third">
          <a href="/verified-applications">
            <div className="lbh-stat hover-darker-grey">
              <strong
                className="lbh-stat__value"
                aria-labelledby="stat-2-caption"
              >
                3
              </strong>
              <span className="lbh-stat__caption" id="stat-2-caption">
                Verified applications ready for review
              </span>
            </div>
          </a>
        </div>
        <div className="govuk-grid-column-one-third">
          <a href="/">
            <div className="lbh-stat hover-darker-grey">
              <strong
                className="lbh-stat__value"
                aria-labelledby="stat-3-caption"
              >
                4
              </strong>
              <span className="lbh-stat__caption" id="stat-3-caption">
                Applications require attention
              </span>
            </div>
          </a>
        </div>
      </div>
      <p>
        Last download at 15:17 14/06/2021 - 5 applications downloaded -{' '}
        <a
          href="/"
          className="govuk-link lbh-link govuk-link--no-visited-state lbh-link--no-visited-state"
        >
          Download now
        </a>
      </p>
    </div>
  </div>
);

export default Dashboard;
