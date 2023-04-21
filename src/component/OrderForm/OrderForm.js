import { addDoc } from "firebase/firestore/lite";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router";

export default function OrderForm() {
  const { cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+996"); // добавлено состояние для кода республики

  if (Object.keys(cart).length === 0) {
    return "Your cart is empty.";
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get("name"),
      phone: countryCode + formData.get("phone"), // добавлен код республики к номеру телефона
      email: formData.get("email"),
      password: formData.get("password"),
      address: formData.get("address"),
      cart: cart,
    }).then((doc) => {
      setCart({});
      navigate("/thank-you");
    });
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function onPhoneInputChange(event) { // добавлена функция обработки изменения поля ввода телефона
    const { value } = event.target;
    if (value.startsWith("+")) {
      setCountryCode(value);
    } else {
      setCountryCode("");
    }
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <h2>Create an order</h2>
      <label>
        Name: <input type="text" name="name" required />
      </label>
      <label>
        Phone:{" "}
        <input
          type="tel"
          name="phone"
          required
          value={countryCode}
          onChange={onPhoneInputChange}
        />
      </label>
      <label>
        Email: <input type="email" name="email" required />
      </label>
      <label>
        Password:{" "}
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
        />
        <button
          type="button"
          className="show-hide-password-button"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
      </label>
      <label>
        Address: <input type="text" name="address" required />
      </label>
      <button>Submit</button>
    </form>
  );
}
