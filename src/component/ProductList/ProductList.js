import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./ProductList.css";

export default function ProductList() {
  const { products } = useContext(AppContext);

  const output = products.map((product) =>(
    <div>
      <img src={product.picture} alt={product.name} />
      <NavLink to={'/product/' + product.slug}>
        {product.name}
      </NavLink>
      <span>{product.price}</span>
    </div>
  ));

  return (
    <div className="ProductList">
      {output}
    </div>
  );
}