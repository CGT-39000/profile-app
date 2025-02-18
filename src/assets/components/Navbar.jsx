import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" style={{textAlign:"center", display: "block"}}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/add-profile" style={{textAlign:"center", display: "block"}}>
            Add Profile
          </Link>
        </li>
        <li>
          <Link to="/about" style={{textAlign:"center", display: "block"}}>
            About
          </Link>
        </li>
      </ul>
      <button id="theme-changer">Toggle</button>
    </nav>
  );
};

export default Navbar;
