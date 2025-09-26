import Nav from '../layout/Nav';
import styles from './Header.module.css';
import Button from '../ui/Button/Button';

const Header = () => {
  return (
    <section className="section section--header">
      <header className={styles.header}>
        <a href="#" className={styles.imageContainer}>
          <img
            src="../../../public/logo.png"
            className={styles.logo}
            alt="DisMode logo"
          />
        </a>
        <Nav />
        <div className="container container--btn">
          <Button id="cta" className="btn btn--cta" text="Learn Now" />
          <Button id="contact" className="btn btn--contact" text="Contact Us" />
        </div>
      </header>
    </section>
  );
};

export default Header;
