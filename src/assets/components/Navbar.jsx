import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/slices/modeSlice";

const Navbar = () => {
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  const handleModeChange = () => {
    dispatch(toggle());
  }

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
        <li>
          <Link to="/login" style={{ textAlign: "center", display: "block" }}>
            Login / Register
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
