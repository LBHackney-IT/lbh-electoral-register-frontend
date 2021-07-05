import { electors } from 'data/electors';
import { useRouter } from 'next/router';
import LinkButton from 'components/LinkButton/LinkButton';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import SideNav from 'components/SideNav/SideNav';
import TextInput from 'components/Form/TextInput/TextInput';
import Button from 'components/Button/Button';

const EditName = (): React.ReactElement => {
  const router = useRouter();
  const { electorId } = router.query;
  const elector = electorId
    ? electors.find((elector) => elector.urn === electorId[0])
    : null;

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const onCancel = () => {
    if (elector) {
      router.push(`/view-elector/${elector.urn}`);
    } else {
      router.push('/search-register');
    }
  };

  const displayForm = () => {
    if (elector) {
      return (
        <div>
          <h2 className="lbh-header__title govuk-!-margin-bottom-7">
            Full name
          </h2>
          <form onSubmit={onFormSubmit}>
            <TextInput label="First name(s)" labelSize="s" name="first_name" />
            <TextInput label="Last name" labelSize="s" name="last_name" />
            <div>
              <LinkButton
                label="Save Changes"
                route={`/view-elector/${elector.urn}`}
                query={{
                  electorId: elector.urn,
                  status: 'success',
                  edit: 'name',
                }}
                className="govuk-!-margin-right-1"
              ></LinkButton>
              <Button
                isSecondary
                label="Cancel"
                type="button"
                onClick={onCancel}
              />
            </div>
          </form>
        </div>
      );
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
        <SideNav active="search" />
      </div>
      <div className="govuk-grid-column-three-quarters">{displayForm()}</div>
    </div>
  );
};

export default EditName;
