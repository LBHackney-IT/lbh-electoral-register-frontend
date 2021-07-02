import Router from 'next/router';
import cx from 'classnames';

export interface Props {
  label: string;
  route: string;
  className?: string;
  isSecondary?: boolean;
  electorId?: string;
  status?: string;
  edit?: {
    electorId: string;
    field: 'name' | 'open-register';
  };
}

const LinkButton = ({
  label,
  route,
  className,
  isSecondary,
  electorId,
  status,
  edit,
}: Props): React.ReactElement => {
  const handleLink = (url: string) => window.open(url, '_blank');
  const isExternal = route && route.includes('https://');
  // const getQuery = () => {
  //   if (status) {
  //     return { status: status }
  //   } else if (edit && (electorId || electorId === 0)) {
  //     return { electorId: electorId, edit: edit }
  //   } else if (electorId || electorId === 0) {
  //     return { electorId: electorId }
  //   }
  // };
  // const query = getQuery();

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
              // query: query,
            })
      }
    >
      {label}
    </button>
  );
};

export default LinkButton;
