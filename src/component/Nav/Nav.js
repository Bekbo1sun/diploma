import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul className="NavUl">
        <li className="NavItem">
          <NavLink to="/" className="NavLink">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about" className="NavLink">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contact" className="NavLink">Contact</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery" className="NavLink">Delivery</NavLink>
        </li>
      </ul>
    </nav>
  )
};