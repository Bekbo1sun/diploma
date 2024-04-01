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
      phone: formData.get("countryCode") + formData.get("phone"),
      user: user.uid,
      address: formData.get("address"),
      cart: cart,
    }).then((doc) => {
      setCart({});
      navigate("/thank-you");
    });
  }

  // Объект соответствия стран и городов
  const citiesByCountry = {
    USA: ["New York", "Los Angeles", "Chicago"],
    UK: ["London", "Manchester", "Birmingham"],
    Russia: ["Moscow", "Saint Petersburg", "Yekaterinburg"],
    Kyrgyzstan: ["Bishkek", "Osh", "Jalal-Abad"],
    Uzbekistan: ["Tashkent", "Samarkand", "Bukhara"],
    Kazakhstan: ["Almaty", "Nur-Sultan", "Shymkent"],
    // Добавьте другие страны и их города по необходимости
  };

  // Функция для обновления списка городов при изменении выбранной страны
  function updateCityOptions() {
    const countrySelect = document.querySelector('select[name="country"]');
    const citySelect = document.querySelector('select[name="city"]');
    const selectedCountry = countrySelect.value;

    // Очищаем список городов
    citySelect.innerHTML = '';

    // Заполняем список городов для выбранной страны
    citiesByCountry[selectedCountry].forEach(city => {
        const option = document.createElement('option');
        option.text = city;
        option.value = city;
        citySelect.add(option);
    });
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <h2>Create an order</h2>
      <label className="OrderForm-label">
        Name: <input type="text" name="name" required className="OrderForm-input" />
      </label>
      <label className="OrderForm-label">
        Telephone:{" "}
        <div className="OrderForm-inputGroup">
          <input type="tel" name="phone" required className="OrderForm-input" />
          <select name="countryCode" className="OrderForm-select">
            <option value="1">+1</option>
            <option value="44">+44</option>
            <option value="7">+7</option>
            <option value="996">+996</option>
          </select>
        </div>
      </label>
      <label className="OrderForm-label">
        Country:
        <select name="country" onChange={updateCityOptions} className="OrderForm-select">
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Russia">Russia</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          {/* Добавьте другие страны по необходимости */}
        </select>
      </label>
      <label className="OrderForm-label">
        City:
        <select name="city" className="OrderForm-select">
          {/* Опции городов будут добавлены динамически при выборе страны */}
        </select>
      </label>
      <label className="OrderForm-label">
        Address: <input type="text" name="address" required className="OrderForm-input" />
      </label>
      <button className="OrderForm-button">Submit</button>
    </form>
  );
}
