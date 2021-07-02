import { Elector } from 'types';
import LinkButton from 'components/LinkButton/LinkButton';

export interface EditElectorTableProps {
  elector: Elector;
}

export interface TableRowProps {
  name: string;
  content: string[];
  edit?: {
    electorId: string;
    field: string;
  };
}
const TableRow = ({
  name,
  content,
  edit,
}: TableRowProps): React.ReactElement => (
  <div className="govuk-summary-list__row">
    <dt className="govuk-summary-list__key">{name}</dt>
    <dd className="govuk-summary-list__value">
      {content.map((row, index) => (
        <p key={`${name}-${index}`} className="govuk-body">
          {row}
        </p>
      ))}
    </dd>
    <dd className="govuk-summary-list__value">
      {edit && (
        <LinkButton
          label="Edit"
          route={`/edit-elector/${edit.electorId}`}
          className="btn-smaller govuk-!-margin-top-2 govuk-!-margin-bottom-2"
        ></LinkButton>
      )}
    </dd>
  </div>
);

const ViewElectorTable = ({
  elector,
}: EditElectorTableProps): React.ReactElement => {
  return (
    <div>
      <h2 className="lbh-header__title govuk-!-margin-bottom-7">
        {elector.first_name} {elector.last_name}
      </h2>
      <dl className="govuk-summary-list">
        <TableRow
          name="Name"
          content={[`${elector.first_name} ${elector.last_name}`]}
          edit={{
            electorId: elector.urn,
            field: 'name',
          }}
        />
        <TableRow
          name="Address"
          content={[
            `${elector.address_ln1}`,
            `${elector.address_ln2} ${elector.postcode}`,
          ]}
        />
        {elector.dob && (
          <TableRow
            name="Date of birth"
            content={[`${elector.dob}` || `${elector.age_range}`]}
          />
        )}
        <TableRow
          name="Open register preference"
          content={[
            `${
              elector.open_register
                ? 'Not included in the open register'
                : 'Included in the open'
            }`,
          ]}
          edit={{
            electorId: elector.urn,
            field: 'open-register',
          }}
        />
      </dl>
    </div>
  );
};

export default ViewElectorTable;
