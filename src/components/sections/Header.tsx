import Nav from '../layout/Nav';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#">
        <img src="" className={styles.logo} alt="DisMode logo" />
      </a>
      <Nav />
    </header>
  );
};

export default Header;
