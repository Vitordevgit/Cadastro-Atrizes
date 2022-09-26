import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav>
      <Link className="linkNavBar" to="/">
        Home
      </Link>{" "}
      <Link className="linkNavBar" to="/AtrizesScreen">
        Atrizes
      </Link>
    </nav>
  );
}
export default NavBar;
