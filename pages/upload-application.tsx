import { useState } from 'react';
import FileUpload from 'components/form/FileUpload/FileUpload';
import Button from 'components/Button/Button';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import SideNav from 'components/SideNav/SideNav';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const UploadApplication = (): React.ReactElement => {
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState(false);

  const router = useRouter();

  const handleFileInput = (e: HTMLInputEvent) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setErrorMessage(false);
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      router.push('/form/register-applicant/name');
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-quarter">
        <SideNav active="upload" />
      </div>
      <div className="govuk-grid-column-three-quarters">
        {errorMessage === true && <ErrorMessage label="Please select a file" />}
        <form onSubmit={onFormSubmit}>
          <FileUpload
            name="upload_files"
            width="30"
            label="Upload a scanned application"
            onChange={handleFileInput}
          />
          <Button type="submit" label="Submit"></Button>
        </form>
      </div>
    </div>
  );
};

export default UploadApplication;
