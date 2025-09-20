import Button from '../Button/Button';

const Nav = () => {
  return (
    <nav className="navbar">
      <img src="" alt="DisMode logo" className="logo" />

      <ul className="list navbar-list">
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
          <a href="#testmonials">Testmonials</a>
        </li>
      </ul>

      <Button text="Subscribe Now" />
    </nav>
  );
};

export default Nav;
