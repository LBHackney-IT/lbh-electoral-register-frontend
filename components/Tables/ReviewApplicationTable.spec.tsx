import { render } from '@testing-library/react';
import ReviewApplicationTable from './ReviewApplicationTable';
import { testElector } from 'data/electors';

describe('ReviewApplicationTable', () => {
  it('should render elector data properly', () => {
    const { asFragment } = render(
      <ReviewApplicationTable elector={testElector} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
