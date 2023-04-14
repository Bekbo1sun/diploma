import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./ProductList.css";

export default function ProductList() {
  const { products } = useContext(AppContext);

  const output = products.map((product) =>(
    <div key={product.id} className="Product">
      <img src={product.picture} alt={product.name} />
      <NavLink to={'/products/' + product.slug}>
        {product.name}
      </NavLink>
      <span>{product.price} som</span>
    </div>
  ));

  return (
    <div className="ProductList">
      {output}
    </div>
  );
}