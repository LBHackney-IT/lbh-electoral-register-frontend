import { render, screen } from '@testing-library/react';

import ConfirmationBanner from './ConfirmationBanner';

describe('ConfirmationBanner', () => {
  it('renders title', () => {
    render(<ConfirmationBanner title="This is the title"></ConfirmationBanner>);
    expect(screen.getByText('This is the title'));
  });

  it('renders content', () => {
    render(
      <ConfirmationBanner
        title="This is the title"
        content="This is the content"
      ></ConfirmationBanner>
    );
    expect(screen.getByText('This is the content'));
  });
});
