import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import "./CartList.css";

export default function CartList() {
  // получить список товаров и корзину
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  // получить только ID товаров в корзинке
  const productIds = Object.keys(cart);

  // чтобы вывести пройтись по товаром
  const output = products
    // удалить все товары которые не в корзине
    .filter((product) => productIds.includes(product.id))
    // вывести товары и их количество
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <div className="Card-content">
          <Link to={"/product/" + product.slug}>{product.name}</Link>
          <input
            type="number"
            value={cart[product.id]}
            min={1}
            onChange={(event) => onQuantityChange(product, +event.target.value)}
          />
          <span>{cart[product.id] * product.price} som</span>
          <button onClick={() => onItemRemove(product)}>Remove</button>
        </div>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}
