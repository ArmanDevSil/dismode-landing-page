import styles from './Nav.module.css';

const Nav = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li></li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
