import { render, fireEvent } from '@testing-library/react';

import Router from 'next/router';

jest.mock('next/router', () => ({ push: jest.fn() }));

import LinkButton from './LinkButton';

describe('Link Button', () => {
  it('renders a button', () => {
    const { getByText } = render(<LinkButton label="Foo" route="foo/bar" />);
    const button = getByText('Foo');
    expect(button).toBeInTheDocument();
  });

  it('should render properly with route', () => {
    const { getByText } = render(<LinkButton label="Foo" route="foo/bar" />);
    fireEvent.click(getByText('Foo'));
    expect(Router.push).toHaveBeenCalled();
    expect(Router.push).toHaveBeenCalledWith({
      "pathname": "foo/bar", 
      "query": undefined
    });
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
    expect(Router.push).toHaveBeenCalledWith({
      "pathname": "foo/bar", 
      "query": {
        "edit": "name", 
        "electorId": "abcdefg", 
        "status": "success"
      }}
    );
  });
});
