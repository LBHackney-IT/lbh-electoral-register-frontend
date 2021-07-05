import { electors } from 'data/electors';
import { useRouter } from 'next/router';
import LinkButton from 'components/LinkButton/LinkButton';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import SideNav from 'components/SideNav/SideNav';
import Button from 'components/Button/Button';
import Radios from 'components/Form/Radios/Radios';

const EditOpenRegisterPreference = (): React.ReactElement => {
  const router = useRouter();
  const { electorId } = router.query;

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const displayForm = () => {
    if (electorId) {
      const elector = electors.find((elector) => elector.urn === electorId[0]);
      if (elector) {
        return (
          <div>
            <h2 className="lbh-header__title govuk-!-margin-bottom-7">
              Open register preference
            </h2>
            <form onSubmit={onFormSubmit}>
              <Radios
                name="open_register"
                label="Does the elector want to be included in the open register?"
                options={['Yes', 'No']}
              />
              <div>
                <LinkButton
                  label="Save Changes"
                  route={`/view-elector/${elector.urn}`}
                  query={{
                    electorId: elector.urn,
                    status: 'success',
                    edit: 'open-register',
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
    }
  };

  const onCancel = () => {
    router.back();
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

export default EditOpenRegisterPreference;
