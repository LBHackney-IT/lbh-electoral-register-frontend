import Button from 'components/Button/Button';
import SideNav from 'components/SideNav/SideNav';
import React from 'react';
import { CSVLink } from 'react-csv';
import { electors } from 'data/electors';
import { headers } from 'data/electors';

const ExportRegister = (): React.ReactElement => {
  const csvFullRegister = {
    data: electors,
    headers: headers,
    filename: 'HackneyFullRegister.csv',
  };

  const openRegister = electors.filter((elector) => elector.open_register === true);

  const csvOpenRegister = {
    data: openRegister,
    headers: headers,
    filename: 'HackneyOpenRegister.csv',
  };

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-quarter">
        <SideNav active="upload" />
      </div>
      <div className="govuk-grid-column-three-quarters">
        <h2 className="lbh-header__title govuk-!-margin-bottom-5">
          Export the register
        </h2>
        <div>
          <CSVLink {...csvOpenRegister}>
            <Button label="Download the open register"></Button>
          </CSVLink>
        </div>
        <div>
          <CSVLink {...csvFullRegister}>
            <Button label="Download the full register"></Button>
          </CSVLink>
        </div>
      </div>
    </div>
  );
};

export default ExportRegister;
