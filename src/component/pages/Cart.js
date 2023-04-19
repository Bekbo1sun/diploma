import CartList from "../CartList/CartList";
import OrderForm from "../OrderForm/OrderForm";

export default function Cart() {
  return (
    <div className="Cart">
      <h1>Cart</h1>
      <CartList />
      <OrderForm />
    </div>
  );
}