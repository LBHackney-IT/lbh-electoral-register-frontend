import PropTypes from 'prop-types';

const ConfirmationBanner = ({ num }) => {
  if (num === 0) {
    return '';
  } else if (num === 1) {
    return (
      <section className="lbh-page-announcement">
        <h3 className="lbh-page-announcement__title">
          Application successfully added to the electoral register
        </h3>
      </section>
    );
  } else {
    return (
      <section className="lbh-page-announcement">
        <h3 className="lbh-page-announcement__title">
          {num} applications successfully added to the electoral register
        </h3>
      </section>
    );
  }
};

ConfirmationBanner.propTypes = {
  num: PropTypes.number,
};

export default ConfirmationBanner;
