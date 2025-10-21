import AnnualPrice from '../ui/Price/AnnualPrice';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <>
      <section
        className={`section ${styles.sectionPricing} flex flex-column flex-center`}
        id="pricing"
      >
        <h2>
          Choose the plan the fits you best and start to learn right now in
          DisMode
        </h2>
        <div className={styles.pricesContainer}>
          <AnnualPrice />
        </div>
      </section>
    </>
  );
};

export default Pricing;
