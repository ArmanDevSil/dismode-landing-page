import styles from './HowItWorks.module.css';
import How from '../ui/How/How';
import { howItWorksSteps } from '../../data/howItWorks.tsx';

const HowItWorks = () => {
  return (
    <section className={`section ${styles.sectionHow}`} id="how">
      <h2>
        How to Learn in <span>DisMode</span>
      </h2>
      <div className={`container ${styles.containerHow}`}>
        {howItWorksSteps.map(how => {
          const randomKey = crypto.randomUUID();
          return (
            <How
              key={randomKey}
              title={how.title}
              text={how.text}
              img={how.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
