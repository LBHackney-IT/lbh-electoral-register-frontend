import { Elector } from 'types';

export interface EditElectorTableProps {
  elector: Elector;
}

export interface TableRowProps {
  name: string;
  content: (string | undefined)[];
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
    <dd className="govuk-summary-list__value edit-column">
      {edit && (
        <a
          href={`/edit-elector/${edit.field}/${edit.electorId}`}
          className="govuk-link govuk-link--no-visited-state govuk-link--no-underline"
        >
          Edit
        </a>
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
            elector.address_ln1,
            `${elector.address_ln2} ${elector.postcode}`,
          ]}
        />
        <TableRow
          name="Lives at another address?"
          content={[
            elector.lived_at_another_address === 'Y' ? 'Yes' : 'No',
          ]}
        />
        <TableRow
          name="Moved house in the last 12 months?"
          content={[elector.moved_house === 'Y' ? 'Yes' : 'No']}
        />

        {elector.previous_address_ln1 && (
          <TableRow
            name="Previous Address"
            content={[
              elector.previous_address_ln1,
              `${elector.previous_address_ln2} ${elector.previous_postcode}`,
              `Overseas voter? ${
                elector.previous_address_overseas === 'Y' ? ' Yes' : ' No'
              }`,
            ]}
          />
        )}

        {(elector.email_address || elector.phone_input) && (
          <TableRow
            name="Contact details"
            content={[elector.email_address, elector.phone_input]}
          />
        )}

        {elector.nationality && (
          <TableRow name="Nationality" content={[elector.nationality]} />
        )}

        {elector.dob && (
          <TableRow
            name="Date of birth"
            content={[elector.dob || elector.age_range]}
          />
        )}

        {elector.nino && (
          <TableRow
            name="National insurance number"
            content={[elector.nino]}
          />
        )}

        {elector.reasons && (
          <TableRow
            name="Reasons for no nationality, date of birth, or national insurance
            number"
            content={[elector.reasons]}
          />
        )}

        {elector.changed_name && (
          <TableRow
            name="Previous name"
            content={[
              elector.previous_name,
              `Date changed: ${elector.previous_name_date}`,
            ]}
          />
        )}

        {elector.voting_proxy_check && (
          <TableRow
            name="Voting by post or proxy?"
            content={[elector.voting_proxy_type]}
          />
        )}
        <TableRow
          name="Open register preference"
          content={[
            elector.open_register
                ? 'Not included in the open register'
                : 'Included in the open'
            ,
          ]}
          edit={{
            electorId: elector.urn,
            field: 'open-register',
          }}
        />
        <TableRow
          name="Applicant signature provided?"
          content={['Yes', `Date signed: ${elector.signature_date}`]}
        />
      </dl>
    </div>
  );
};

export default ViewElectorTable;
