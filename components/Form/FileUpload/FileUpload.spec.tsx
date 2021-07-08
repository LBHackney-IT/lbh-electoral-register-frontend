import { render, fireEvent } from '@testing-library/react';
import FileUpload from './FileUpload';

describe('FileUpload component', () => {
  const myAction = jest.fn();
  const props = {
    label: 'Foo',
    name: 'foo_file_upload',
    onChange: myAction,
  };

  it('should render properly', () => {
    const { getByTestId } = render(<FileUpload {...props} />);
    expect(getByTestId('foo_file_upload')).toBeInTheDocument();
  });

  it('should perform an action on change', () => {
    const { getByText } = render(<FileUpload {...props} />);
    fireEvent.click(getByText('foo_file_upload'));
    expect(myAction).toHaveBeenCalled();
  });
});
