import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./CartLink.css";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  // вычислить количество товаров
  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <NavLink to="/cart">
        Cart ({total})
      </NavLink>
    </div>
  );
}