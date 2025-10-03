import styles from './HowItWorks.module.css';
import How from '../ui/How/How';
import { howItWorksSteps } from '../../data/howItWorks.tsx';

const HowItWorks = () => {
  return (
    <section className={`section ${styles.sectionHow}`} id="how">
      <h2>
        How to Learn in <span>DisMode</span>
      </h2>
      {howItWorksSteps.map(how => {
        return <How title={how.title} text={how.text} img={how.img} />;
      })}
    </section>
  );
};

export default HowItWorks;
