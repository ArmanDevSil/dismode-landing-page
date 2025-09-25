import Nav from '../layout/Nav';
import styles from './Header.module.css';

const Header = () => {
  return (
    <section className="section section--header">
      <header className={styles.header}>
        <a href="#">
          <img src="" className={styles.logo} alt="DisMode logo" />
        </a>
        <Nav />
      </header>
    </section>
  );
};

export default Header;
