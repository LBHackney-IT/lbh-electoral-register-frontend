import { render } from '@testing-library/react';
import VerifiedApplicationsTable from './VerifiedApplicationsTable';
import { testElector } from 'data/electors';

describe('SearchRegisterTable', () => {
  it('should render elector data properly', () => {
    const mockOnAdd = jest.fn();
    const { asFragment } = render(
      <VerifiedApplicationsTable electors={[testElector]} onAdd={mockOnAdd} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
