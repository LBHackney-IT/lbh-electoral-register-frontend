import Router from 'next/router';
import cx from 'classnames';

export interface Props {
  label: string;
  route: string;
  className?: string;
  isSecondary?: boolean;
  electorId?: number;
  status?: string;
}

const LinkButton = ({
  label,
  route,
  className,
  isSecondary,
  electorId,
  status,
}: Props): React.ReactElement => {
  const handleLink = (url: string) => window.open(url, '_blank');
  const isExternal = route && route.includes('https://');
  const query =
    electorId || electorId === 0
      ? { electorId: electorId }
      : { status: status };

  return (
    <button
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
              query: query,
            })
      }
    >
      {label}
    </button>
  );
};

export default LinkButton;
