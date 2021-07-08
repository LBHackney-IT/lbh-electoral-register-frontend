import { render } from '@testing-library/react';
import SearchRegisterTable from './SearchRegisterTable';
import { testElector } from 'data/electors';

describe('SearchRegisterTable', () => {
  it('should render elector data properly', () => {
    const { asFragment } = render(
      <SearchRegisterTable electors={[testElector]} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
