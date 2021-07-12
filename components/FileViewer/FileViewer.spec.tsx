import { render, screen, fireEvent } from '@testing-library/react';

import FileViewer from './FileViewer';

describe('FileViewer', () => {
  const file = {
    url: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/931882/Register-to-vote-if-youre-living-in-England.pdf',
  };

  it('displays file', () => {
    render(<FileViewer file={file}></FileViewer>);
    expect(
      screen.queryByText('Failed to load PDF file.')
    ).not.toBeInTheDocument();
  });

  it('renders page numbers', () => {
    render(<FileViewer file={file}></FileViewer>);
    expect(screen.getByText('1 of 3')).toBeInTheDocument();
  });

  it('changes page on click', () => {
    render(<FileViewer file={file}></FileViewer>);
    fireEvent.click(screen.getByTestId('next-button'));
    expect(screen.getByText('2 of 3')).toBeInTheDocument();
  });
});
