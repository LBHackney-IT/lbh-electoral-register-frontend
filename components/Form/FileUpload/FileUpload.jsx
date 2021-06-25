import PropTypes from 'prop-types';
import cx from 'classnames';

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
}) => (
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

FileUpload.propTypes = {
  label: PropTypes.string,
  labelSize: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
  name: PropTypes.string.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  inputClassName: PropTypes.string,
  type: PropTypes.object,
  register: PropTypes.func,
  required: PropTypes.bool,
  width: PropTypes.string,
};

export default FileUpload;
