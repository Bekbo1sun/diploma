import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return "Your cart is empty";
  }

  if (!user) {
    return "Please login to create an order.";
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get("name"),
      phone: formData.get("phone"),
      user: user.uid,
      address: formData.get("address"),
      cart: cart,
    }).then((doc) => {
      setCart({});
      navigate("/thank-you");
    });
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <h2>Create an order</h2>
      <label>
        Name: <input type="text" name="name" required />
      </label>
      <label>
        Telephone:{" "}
        <div style={{ display: "flex" }}>
          <input type="tel" name="phone" required />
          <select name="countryCode">
            <option value="1">+1</option>
            <option value="44">+44</option>
            <option value="7">+7</option>
            <option value="996">+996</option>
          </select>
        </div>
      </label>
      <label>
        Страна:
        <select name="country">
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Russia">Russia</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          {/* Добавьте другие страны по необходимости */}
        </select>
      </label>
      <label>
        Address: <input type="text" name="address" required />
      </label>
      <button>Submit</button>
    </form>
  );
}
