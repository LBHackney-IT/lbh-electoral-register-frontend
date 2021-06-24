import { render } from '@testing-library/react';

import Header from './Header';

jest.mock('./Logo', () => () => 'MockedLogo');

describe('Header component', () => {
  const props = {
    serviceName: 'Foo',
  };

  it('should render service name but no header links', () => {
    const { getByText } = render(<Header {...props} />);
    expect(getByText('Foo')).toBeInTheDocument();
  });
});
