// import homeLogo from "../assets/home.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* <img src={homeLogo} alt="Home" className="nav-logo" /> */}
        <span className="brand">🏠</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
