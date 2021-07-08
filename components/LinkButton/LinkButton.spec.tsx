import { render, fireEvent } from '@testing-library/react';

import Router from 'next/router';

jest.mock('next/router', () => ({ push: jest.fn() }));

import LinkButton from './LinkButton';

describe('Button', () => {
  it('renders a button', () => {
    const { getByText } = render(<LinkButton label="Foo" route="foo/bar" />);
    const button = getByText('Foo');
    expect(button).toBeInTheDocument();
  });

  it('should render properly with route', () => {
    const { getByText } = render(<LinkButton label="Foo" route="foo/bar" />);
    fireEvent.click(getByText('Foo'));
    expect(Router.push).toHaveBeenCalled();
    expect(Router.push).toHaveBeenCalledWith('foo/bar');
  });

  it('should pass the correct query', () => {
    const { getByText } = render(
      <LinkButton
        label="Foo"
        route="foo/bar"
        query={{
          electorId: 'abcdefg',
          edit: 'name',
          status: 'success',
        }}
      ></LinkButton>
    );
    fireEvent.click(getByText('Foo'));
    expect(Router.push).toHaveBeenCalled();
    expect(Router.push).toHaveBeenCalledWith(
      'foo/bar?electorId=abcdefg&edit=name&status=success'
    );
  });
});
