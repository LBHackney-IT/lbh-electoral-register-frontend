export interface Props {
  num: number;
}

const ConfirmationBanner = ({ num }: Props): React.ReactElement => {
  const confirmationText =
    num === 1
      ? 'Application successfully added to the electoral register'
      : `${num} applications successfully added to the electoral register`;
  return (
    <section className="lbh-page-announcement">
      <h3 className="lbh-page-announcement__title">{confirmationText}</h3>
    </section>
  );
};

export default ConfirmationBanner;
