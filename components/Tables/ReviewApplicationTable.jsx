import { electorPropTypes } from '../../data/electors';

const ReviewApplicationTable = ({ elector }) => (
  <div>
    <dl className="govuk-summary-list">
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">Name</dt>
        <dd className="govuk-summary-list__value">
          {elector.first_name} {elector.last_name}
        </dd>
      </div>
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">Address</dt>
        <dd className="govuk-summary-list__value">
          <p className="govuk-body">{elector.address_ln1}</p>
          <p className="govuk-body">
            {elector.address_ln2} {elector.postcode}
          </p>
        </dd>
      </div>
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">Lives at another address?</dt>
        <dd className="govuk-summary-list__value">
          <p className="govuk-body">
            {elector.lived_at_another_address === 'Y' ? 'Yes' : 'No'}
          </p>
        </dd>
      </div>
      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">
          Moved house in the last 12 months?
        </dt>
        <dd className="govuk-summary-list__value">
          <p className="govuk-body">
            {elector.moved_house === 'Y' ? 'Yes' : 'No'}
          </p>
        </dd>
      </div>

      {elector.previous_address_ln1 && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Previous Address</dt>
          <dd className="govuk-summary-list__value">
            <div>
              <p className="govuk-body">{elector.previous_address_ln1}</p>
              <p className="govuk-body">
                {elector.previous_address_ln2} {elector.previous_postcode}
              </p>
              <p className="govuk-body">
                Overseas voter?
                {elector.previous_address_overseas === 'Y' ? ' Yes' : ' No'}
              </p>
            </div>
          </dd>
        </div>
      )}

      {(elector.email_address || elector.phone_input) && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Contact details</dt>
          <dd className="govuk-summary-list__value">
            <p className="govuk-body">{elector.email_address}</p>
            <p className="govuk-body">{elector.phone_input}</p>
          </dd>
        </div>
      )}

      {elector.nationality && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Nationality</dt>
          <dd className="govuk-summary-list__value">{elector.nationality}</dd>
        </div>
      )}

      {elector.dob && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Date of birth</dt>
          <dd className="govuk-summary-list__value">
            {elector.dob}
            {elector.age_range}
          </dd>
        </div>
      )}

      {elector.nino && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">National insurance number</dt>
          <dd className="govuk-summary-list__value">{elector.nino}</dd>
        </div>
      )}

      {elector.reasons && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Reasons for no nationality, date of birth, or national insurance
            number
          </dt>
          <dd className="govuk-summary-list__value">{elector.reasons}</dd>
        </div>
      )}

      {elector.changed_name && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Previous name</dt>
          <dd className="govuk-summary-list__value">
            <div>
              <p className="govuk-body">{elector.previous_name}</p>
              <p className="govuk-body">
                Date changed: {elector.previous_name_date}
              </p>
            </div>
          </dd>
        </div>
      )}

      {elector.voting_proxy_check && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Voting by post or proxy?</dt>
          <dd className="govuk-summary-list__value">
            <p className="govuk-body">{elector.voting_proxy_type}</p>
          </dd>
        </div>
      )}

      {elector.open_register && (
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">
            Do not want to be included in the open register?
          </dt>
          <dd className="govuk-summary-list__value">
            {elector.open_register ? 'True' : 'False'}
          </dd>
        </div>
      )}

      <div className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">
          Applicant signature provided?
        </dt>
        <dd className="govuk-summary-list__value">
          <p className="govuk-body">Yes</p>
          {elector.signature_date && (
            <p className="govuk-body">Date signed: {elector.signature_date}</p>
          )}
        </dd>
      </div>
    </dl>
  </div>
);

ReviewApplicationTable.propTypes = {
  elector: {
    ...electorPropTypes,
  },
};

export default ReviewApplicationTable;
