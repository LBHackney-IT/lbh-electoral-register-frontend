import PropTypes from 'prop-types';
import Router from 'next/router';
import cx from 'classnames';

const LinkButton = ({ label, route, className, isSecondary, state }) => {
  const handleLink = (url) => window.open(url, '_blank');
  const isExternal = route && route.includes('https://');
  return (
    <button
      href="#"
      role="button"
      draggable="false"
      className={cx(
        'govuk-button lbh-button',
        {
          'govuk-button--secondary lbh-button--secondary': isSecondary,
        },
        className
      )}
      data-module="govuk-button"
      onClick={() =>
        isExternal
          ? handleLink(route)
          : Router.push({
              pathname: `${route}`,
              query: { state: state },
            })
      }
    >
      {label}
    </button>
  );
};

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  className: PropTypes.string,
  isSecondary: PropTypes.bool,
  state: PropTypes.string,
};

export default LinkButton;
