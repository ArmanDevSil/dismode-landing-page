import styles from './TrustedBy.module.css';
import LogosSlider from '../ui/LogosSlider/LogosSlider';

const TrustedBy = () => {
  return (
    <section
      className={`section ${styles.sectionTrustedBy} flex flex-center flex-column`}
    >
      <div className={styles.logosContainer}>
        <LogosSlider />
      </div>
    </section>
  );
};

export default TrustedBy;
