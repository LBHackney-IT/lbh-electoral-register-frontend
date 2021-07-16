import { render } from '@testing-library/react';
import ViewElectorTable from './ViewElectorTable';
import { testElector } from 'data/electors';

describe('ViewElectorTable', () => {
  it('should render elector data properly', () => {
    const { asFragment } = render(<ViewElectorTable elector={testElector} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
