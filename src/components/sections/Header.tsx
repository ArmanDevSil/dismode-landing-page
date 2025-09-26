import Nav from '../layout/Nav';
import styles from './Header.module.css';

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
      </header>
    </section>
  );
};

export default Header;
