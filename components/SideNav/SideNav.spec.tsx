import { render, screen } from '@testing-library/react';

import SideNav from './SideNav';

describe('SideNav', () => {
  it('sets active state', () => {
    render(<SideNav active="dashboard"></SideNav>);
    expect(screen.getByText('Dashboard').classList.contains('active')).toBe(
      true
    );
  });

  it('contains correct links', () => {
    render(<SideNav></SideNav>);
    expect(screen.getByText('Dashboard').closest('a')).toHaveAttribute(
      'href',
      '/'
    );
    expect(screen.getByText('Upload').closest('a')).toHaveAttribute(
      'href',
      '/upload-application'
    );
    expect(screen.getByText('Search').closest('a')).toHaveAttribute(
      'href',
      '/search-register'
    );
    expect(screen.getByText('Export').closest('a')).toHaveAttribute(
      'href',
      '/export-register'
    );
  });
});
