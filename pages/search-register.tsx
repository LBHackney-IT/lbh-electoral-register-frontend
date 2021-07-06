import SearchRegisterTable from 'components/Tables/SearchRegisterTable';
import { electors } from 'data/electors';
import SideNav from 'components/SideNav/SideNav';
import TextInput from 'components/Form/TextInput/TextInput';
import { useState } from 'react';
import { Elector } from 'types';

export const SearchRegister = (): React.ReactElement => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Elector[]>([]);

  const filterResults = (query: string) => {
    if (!query.trim()) {
      setResults([]);
    } else {
      setResults(
        electors.filter((elector) =>
          (
            elector.first_name.toLowerCase() +
            ' ' +
            elector.last_name.toLowerCase()
          ).includes(query.toLowerCase())
        )
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    filterResults(e.target.value);
  };

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-quarter">
        <SideNav active="search" />
      </div>
      <div className="govuk-grid-column-three-quarters">
        <h2 className="lbh-header__title govuk-!-margin-bottom-5">
          Search the register
        </h2>
        <TextInput
          label="Enter the name of an elector"
          labelSize="s"
          name="name_query"
          inputClassName="govuk-!-margin-bottom-5"
          value={query}
          onChange={handleChange}
        />
        <SearchRegisterTable electors={results} />
      </div>
    </div>
  );
};

export default SearchRegister;
