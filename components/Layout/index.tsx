import Seo from './Seo/Seo';
import Header from './Header/Header';

export interface Props {
  children: React.ReactChild;
  goBackButton?: boolean;
}

const Layout = ({ goBackButton, children }: Props): React.ReactElement => {
  return (
    <>
      <Seo title="Register Admin - Hackney Council" />
      <Header serviceName="REGISTER" />
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper" id="content" role="main">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
