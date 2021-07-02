import { Elector } from 'types';
import { electors } from 'data/electors';
import { useState } from 'react';
import { useRouter } from 'next/router';
import EditElectorTable from 'components/Tables/ViewElectorTable';
import LinkButton from 'components/LinkButton/LinkButton';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import SideNav from 'components/SideNav/SideNav';
import TextInput from 'components/Form/TextInput/TextInput';
import Button from 'components/Button/Button';

const EditElector = (): React.ReactElement => {
  const router = useRouter();
  const { electorId } = router.query;

  const displayForm = () => {
    if (electorId) {
      const elector = electors.find((elector) => elector.urn === electorId[0]);
      if (elector) {
        return (
          <div>
            <h2 className="lbh-header__title govuk-!-margin-bottom-7">
              Full Name
            </h2>
            <form>
              <TextInput
                label="First name(s)"
                labelSize="s"
                name="first_name"
              />
              <TextInput label="Last name" labelSize="s" name="last_name" />
              <div>
                <LinkButton
                  label="Save Changes"
                  route="/view-elector"
                  electorId={elector.urn}
                  status={'success'}
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

export default EditElector;
