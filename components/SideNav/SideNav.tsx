import cx from 'classnames';

export interface Props {
  active: string;
}

const SideNav = ({ active }: Props) => {
  const links = [{
    key: 'dashboard',
    text: 'Dashboard',
    link: '/'
  },
  {
    key: 'upload',
    text: 'Upload',
    link: '/upload-application'
  },
  {
    key: 'search',
    text: 'Search',
    link: '/'
  },
  {
    key: 'export',
    text: 'Export',
    link: '/'
  }]

  return (
    <ul className="app-navigation__list app-width-container lbh-list">
      {links.map((item) => {
        <li key={item.key} className="app-navigation__list-item">
          <a
            className={cx(
              'govuk-link lbh-link govuk-link--no-visited-state lbh-link--no-visited-state govuk-link--no-underline',
              {
                'active': active === {item.key},
              }
            )}
            href={item.link}
          >
            {item.text}
          </a>
        </li>
      })}
    </ul>
  );
};

export default SideNav;
