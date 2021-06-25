import { useState } from 'react';
import FileUpload from 'components/form/FileUpload/FileUpload';
import Button from 'components/Button/Button';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const UploadApplication = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  const router = useRouter();

  const handleFileInput = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setErrorMessage(false);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (file) {
        router.push('/form/register-applicant/name');
    } else {
        setErrorMessage(true);
    }
  };

  const onBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div>
      <a
        className="govuk-back-link lbh-back-link govuk-!-margin-bottom-6"
        onClick={onBack}
      >
        Back
      </a>

      {errorMessage === true && <ErrorMessage label="Please select a file" />}

      <form onSubmit={onFormSubmit}>
        <FileUpload
          name="upload_files"
          width="30"
          label="Upload a scanned application"
          rules="{ required: true }"
          onChange={handleFileInput}
        />
        <Button onClick={onFormSubmit} type="submit" label="Submit"></Button>
      </form>
    </div>
  );
};

export default UploadApplication;
