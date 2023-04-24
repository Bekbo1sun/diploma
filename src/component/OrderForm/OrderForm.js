import { addDoc } from "firebase/firestore/lite";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router";

const countryCodes = [
  { code: "+996", country: "Kyrgyzstan" },
  { code: "+7", country: "Russia" },
  { code: "+76", country: "Kazakhstan" },
  { code: "+998", country: "Uzbekistan" },
];

export default function OrderForm() {
  const { cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+996 ");

  if (Object.keys(cart).length === 0) {
    return "Your cart is empty.";
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get("name"),
      phone: countryCode + formData.get("phone"),
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

  function onPhoneInputChange(event) {
    const { value } = event.target;
    if (value.startsWith(countryCode)) {
      setCountryCode(value.slice(0, countryCode.length));
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
        <select name="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
          {countryCodes.map(({ code, country }) => (
            <option key={code} value={code}>{`${country} (${code})`}</option>
          ))}
        </select>
        <input
          type="tel"
          name="phone"
          required
          pattern="[0-9]{7,15}"
          value={countryCode === "" ? "" : countryCode}
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
