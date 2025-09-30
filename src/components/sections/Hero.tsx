import Button from '../ui/Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`section ${styles.sectionHero} flex flex-center`}>
      <div className={`${styles.heroTextBox} flex flex-center flex-column`}>
        <h1>
          Learn The Modern Way in <span>DisMode</span>
        </h1>
        <p>Discover how to really learn in the modern age</p>
        <Button className="btn btn--cta" text="Learn in DisMode" />
      </div>
    </section>
  );
};

export default Hero;
