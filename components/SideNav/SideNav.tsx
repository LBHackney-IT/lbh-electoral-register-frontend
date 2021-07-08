import cx from 'classnames';

export interface SideNavProps {
  active: string;
}

export interface NavLink {
  key: string;
  text: string;
  link: string;
}

const SideNav = ({ active }: SideNavProps): JSX.Element => {
  const navLinks: NavLink[] = [
    {
      key: 'dashboard',
      text: 'Dashboard',
      link: '/',
    },
    {
      key: 'upload',
      text: 'Upload',
      link: '/upload-application',
    },
    {
      key: 'search',
      text: 'Search',
      link: '/search-register',
    },
    {
      key: 'export',
      text: 'Export',
      link: '/',
    },
  ];

  return (
    <ul className="app-navigation__list app-width-container lbh-list">
      {navLinks.map((navLink: NavLink) => (
        <li key={navLink.key} className="app-navigation__list-item">
          <a
            className={cx(
              'govuk-link lbh-link govuk-link--no-visited-state lbh-link--no-visited-state govuk-link--no-underline',
              {
                active: active === navLink.key,
              }
            )}
            href={navLink.link}
          >
            {navLink.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SideNav;
