import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/MyThemeContext";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);
  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dash">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/bitcoinrates">Bitcoin Rates</NavLink>
        </li>
      </ul>{" "}
      {/* ++ Add another page with route and component */}
    </nav>
  );
}
