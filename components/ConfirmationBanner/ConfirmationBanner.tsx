export interface Props {
  title: string;
  content?: string;
}

const ConfirmationBanner = ({ title, content }: Props): React.ReactElement => (
  <section className="lbh-page-announcement">
    <h4 className="lbh-page-announcement__title">{title}</h4>
    <div className="lbh-page-announcement__content">{content}</div>
  </section>
);

export default ConfirmationBanner;
