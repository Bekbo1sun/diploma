import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function NavLast() {
  return (
    <nav className="NavLast">
      <ul className="NavUl-Last">
        <li className="NavItem-Last">
          <NavLink to="/" className="NavLink-Last">Home</NavLink>
        </li>
        <li className="NavItem-Last">
          <NavLink to="/about" className="NavLink-Last">About</NavLink>
        </li>
        <li className="NavItem-Last">
          <NavLink to="/contact" className="NavLink-Last">Contact</NavLink>
        </li>
        <li className="NavItem-Last">
          <NavLink to="/technical-support" className="NavLink-Last">Technical Support</NavLink>
        </li>
      </ul>
    </nav>
  )
};