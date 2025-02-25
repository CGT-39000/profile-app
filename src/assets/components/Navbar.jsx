import { Link } from "react-router-dom";
import { ModeContext } from "../context/ModeContext";
import { useContext } from "react";

const Navbar = () => {
  const {mode, handleModeChange} = useContext(ModeContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" style={{ textAlign: "center", display: "block" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/add-profile"
            style={{ textAlign: "center", display: "block" }}
          >
            Add Profile
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textAlign: "center", display: "block" }}>
            About
          </Link>
        </li>
      </ul>
      <button id="theme-changer" onClick={handleModeChange}>
        {mode === "light" ? "dark" : "light"}
      </button>
    </nav>
  );
};

export default Navbar;
