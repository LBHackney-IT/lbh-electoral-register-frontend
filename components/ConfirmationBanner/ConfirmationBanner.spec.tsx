import { render } from '@testing-library/react';

import ConfirmationBanner from './ConfirmationBanner';

describe('ConfirmationBanner', () => {
  it('should title and content properly', () => {
    const { asFragment } = render(
      <ConfirmationBanner
        title="This is the title"
        content="This is the content"
      ></ConfirmationBanner>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
