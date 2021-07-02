import Button from 'components/Button/Button';
import LinkButton from 'components/LinkButton/LinkButton';
import { Elector } from 'types';
import Link from 'next/link';

export interface Props {
  electors: Elector[];
}

const SearchRegisterTable = ({ electors }: Props): React.ReactElement => (
  <div>
    <table className="govuk-table">
      <thead className="govuk-table__head">
        <tr className="govuk-table_register_row">
          <th scope="col" className="govuk-table__header">
            Name
          </th>
          <th scope="col" className="govuk-table__header">
            Address
          </th>
          <th scope="col" className="govuk-table__header"></th>
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        {electors.map((elector, index) => (
          <tr className="govuk-table__row" key={elector.urn}>
            <td className="govuk-table__cell">
              {elector.first_name} {elector.last_name}
            </td>
            <td className="govuk-table__cell">
              {elector.address_ln1}, {elector.postcode}
            </td>
            <td className="govuk-table__cell text-align-right">
              <LinkButton
                label="View"
                route={`/view-elector/${elector.urn}`}
                className="btn-smaller govuk-!-margin-top-2 govuk-!-margin-bottom-2"
              ></LinkButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SearchRegisterTable;
