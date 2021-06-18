interface SummaryElement {
  key: string;
  title: string;
  value: string;
  type?: string;
  href?: string;
}

interface Props {
  list: SummaryElement[];
}

const SummaryList = ({ list }: Props): React.ReactElement => (
  <dl className="govuk-summary-list">
    {list &&
      list.map(({ key, title, value, href }) => (
        <div key={key} className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">{title}</dt>
          <dd className="govuk-summary-list__value">{value}</dd>
          {href && (
            <dd className="govuk-summary-list__actions">
              <a className="govuk-link" href="#">
                Change
                <span className="govuk-visually-hidden"> {title}</span>
              </a>
            </dd>
          )}
        </div>
      ))}
  </dl>
);

export default SummaryList;
