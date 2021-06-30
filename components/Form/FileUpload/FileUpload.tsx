import cx from 'classnames';
import { FileUploadProps } from 'components/Form/types';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const FileUpload = ({
  label,
  name,
  register,
  error,
  type = 'file',
  inputClassName,
  labelSize = 'm',
  required,
  width,
  onChange,
}: FileUploadProps): React.ReactElement => (
  <div
    className={cx('govuk-form-group lbh-form-group', {
      'govuk-form-group--error': error,
    })}
  >
    <label
      className={`govuk-label lbh-label govuk-label--${labelSize}`}
      htmlFor={name}
    >
      {label} {required && <span className="govuk-required">*</span>}
    </label>
    {error && <ErrorMessage label={error.message} />}
    <input
      className={cx(
        `govuk-file-upload lbh-file-upload govuk-!-padding-2`,
        inputClassName,
        {
          [`govuk-input--width-${width}`]: width,
          'govuk-input--error': error,
        }
      )}
      id={name}
      data-testid={name}
      name={name}
      type={type}
      ref={register}
      multiple
      onChange={onChange}
    />
  </div>
);

export default FileUpload;
