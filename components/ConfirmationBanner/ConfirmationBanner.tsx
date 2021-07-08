export interface Props {
  title: string;
  content?: string;
}

const ConfirmationBanner = ({ title, content }: Props): React.ReactElement => (
  <section className="lbh-page-announcement">
    <h3 className="lbh-page-announcement__title">{title}</h3>
    <div className="lbh-page-announcement__content">{content}</div>
  </section>
);

export default ConfirmationBanner;
