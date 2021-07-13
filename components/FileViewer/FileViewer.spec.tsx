import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import FileViewer from './FileViewer';

describe('FileViewer', () => {
  const file = {
    url: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/931882/Register-to-vote-if-youre-living-in-England.pdf',
  };

  it('displays file', async () => {
    render(<FileViewer file={file}></FileViewer>);
    await waitFor(() => {
      expect(screen.queryByText('Failed to load PDF file.')).toBeNull();
    });
  });

  it('renders page numbers', async () => {
    render(<FileViewer file={file}></FileViewer>);
    await waitFor(() => {
      expect(screen.getByText('1 of 3')).toBeInTheDocument();
    });
  });

  it('changes page on click', async () => {
    render(<FileViewer file={file}></FileViewer>);
    fireEvent.click(screen.getByTestId('next-button'));
    await waitFor(() => {
      expect(screen.getByText('2 of 3')).toBeInTheDocument();
    });
  });
});
