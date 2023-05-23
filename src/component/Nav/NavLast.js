import { NavLink } from "react-router-dom";
import "./NavLast.css";

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
          <NavLink to="/orders" className="NavLink-Last">Orders</NavLink>
        </li>
        <li className="NavItem-Last">
          <NavLink to="/support" className="NavLink-Last">Support</NavLink>
        </li>
      </ul>
    </nav>
  )
};