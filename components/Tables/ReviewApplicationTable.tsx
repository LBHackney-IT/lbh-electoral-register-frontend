import { Elector } from 'types';

export interface ReviewApplicationTableProps {
  elector: Elector;
}

export interface TableRowProps {
  name: string;
  content: (string | undefined)[];
}

const TableRow = ({ name, content }: TableRowProps): React.ReactElement => (
  <div className="govuk-summary-list__row">
    <dt className="govuk-summary-list__key half-width">{name}</dt>
    <dd className="govuk-summary-list__value half-width">
      {content.map((row, index) => (
        <p key={`${name}-${index}`} className="govuk-body">
          {row}
        </p>
      ))}
    </dd>
  </div>
);

const ReviewApplicationTable = ({
  elector,
}: ReviewApplicationTableProps): React.ReactElement => (
  <div>
    <dl className="govuk-summary-list">
      <TableRow
        name="Name"
        content={[`${elector.first_name} ${elector.last_name}`]}
      />
      <TableRow
        name="Address"
        content={[elector.address_ln1, elector.address_ln2, elector.postcode]}
      />
      <TableRow
        name="Lives at another address?"
        content={[elector.lived_at_another_address === 'Y' ? 'Yes' : 'No']}
      />
      <TableRow
        name="Moved house in the last 12 months?"
        content={[elector.moved_house === 'Y' ? 'Yes' : 'No']}
      />

      <TableRow
        name="Previous Address"
        content={[
          elector.previous_address_ln1,
          elector.previous_address_ln2,
          elector.previous_postcode,
          elector.previous_address_ln1
            ? `Overseas voter? ${
                elector.previous_address_overseas === 'Y' ? ' Yes' : ' No'
              }`
            : '',
        ]}
      />

      <TableRow
        name="Contact details"
        content={[elector.email_address, elector.phone_input]}
      />

      <TableRow name="Nationality" content={[elector.nationality]} />

      <TableRow
        name="Date of birth"
        content={[elector.dob || elector.age_range]}
      />

      <TableRow name="National insurance number" content={[elector.nino]} />

      <TableRow
        name="Reasons for no nationality, date of birth, or national insurance
          number"
        content={[elector.reasons]}
      />

      <TableRow
        name="Previous name"
        content={[
          elector.previous_name,
          elector.previous_name_date
            ? `Date changed: ${elector.previous_name_date}`
            : '',
        ]}
      />

      <TableRow
        name="Voting by post or proxy?"
        content={[
          elector.voting_proxy_type
            ? elector.voting_proxy_type === 'post'
              ? 'Post'
              : 'Proxy'
            : '',
        ]}
      />

      {elector.open_register && (
        <TableRow
          name="Do not want to be included in the open register?"
          content={[elector.open_register ? 'True' : 'False']}
        />
      )}

      <TableRow
        name="Applicant signature provided?"
        content={[
          'Yes',
          elector.signature_date
            ? `Date signed: ${elector.signature_date}`
            : '',
        ]}
      />
    </dl>
  </div>
);

export default ReviewApplicationTable;
