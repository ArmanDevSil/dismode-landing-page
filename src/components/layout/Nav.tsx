import Button from '../ui/Button/Button';
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
        <Button id="cta" className="btn btn--cta" text="Learn Now" />
      </nav>
    </>
  );
};

export default Nav;
