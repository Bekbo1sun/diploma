import "./OrderForm.css";

export default function OrderForm() {
  return (
   <form>
    <label>
      name: <input type="text" name="name" required />
    </label>
    <label>
      phone: <input type="tel" name="phone" required />
    </label>
    <label>
      Email: <input type="email" name="email" required />
    </label>
    <label>
      Address: <input type="text" name="address" required />
    </label>
    <button>Submit</button>
   </form>
  );
}