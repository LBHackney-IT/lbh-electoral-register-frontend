import { render } from '@testing-library/react';

import Header from './Header';

let mockedUseRouter = { pathname: 'pathname' };

jest.mock('next/router', () => ({
  asPath: 'path',
  useRouter: () => mockedUseRouter,
}));

jest.mock('./Logo', () => () => 'MockedLogo');

describe('Header component', () => {
  const props = {
    serviceName: 'Foo',
  };

  it('should render service name but no header links', () => {
    const { getByText, queryByText } = render(
        <Header {...props} />
    );
    expect(getByText('Foo')).toBeInTheDocument();
  });
});
