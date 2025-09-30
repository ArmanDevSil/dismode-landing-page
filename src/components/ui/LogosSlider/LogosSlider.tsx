import styles from './LogosSlider.module.css';
import Logos from '../Logos/Logos';

const LogosSlider = () => {
  return (
    <div className={`container ${styles.logosSlider} flex flex-center`}>
      <Logos />
      <Logos />
    </div>
  );
};

export default LogosSlider;
