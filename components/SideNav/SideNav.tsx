import cx from 'classnames';

export interface Props {
  active: string;
}

const SideNav = ({ active }: Props) => {
  return (
    <ul className="app-navigation__list app-width-container lbh-list">
      <li className="app-navigation__list-item">
        <a
          className={cx(
            'govuk-link lbh-link govuk-link--no-visited-state lbh-link--no-visited-state govuk-link--no-underline',
            {
              active: active === 'dashboard',
            }
          )}
          href="/"
        >
          Dashboard
        </a>
      </li>
      <li className="app-navigation__list-item">
        <a
          className={cx(
            'govuk-link lbh-link govuk-link--no-visited-state lbh-link--no-visited-state govuk-link--no-underline',
            {
              active: active === 'upload',
            }
          )}
          href="/upload-application"
        >
          Upload
        </a>
      </li>
      <li className="app-navigation__list-item">
        <a
          className={cx(
            'govuk-link lbh-link govuk-link--no-visited-state lbh-link--no-visited-state govuk-link--no-underline',
            {
              active: active === 'search',
            }
          )}
          href="/"
        >
          Search
        </a>
      </li>
      <li className="app-navigation__list-item">
        <a
          className={cx(
            'govuk-link lbh-link govuk-link--no-visited-state lbh-link--no-visited-state govuk-link--no-underline',
            {
              active: active === 'export',
            }
          )}
          href="/"
        >
          Export
        </a>
      </li>
    </ul>
  );
};

export default SideNav;
