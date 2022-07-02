import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <span className="logo">Booking</span>
        </Link>
        {user ? (
          <span>{user.username}</span>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={() => navigate("/login")} className="navButton">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
