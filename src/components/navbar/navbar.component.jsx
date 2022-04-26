import { Link } from "react-router-dom";
import ThemeSwitcher from "../theme-switcher/theme.switcher.component";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <nav>
      <ThemeSwitcher />
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
    </nav>
  );
};

export default Navbar;