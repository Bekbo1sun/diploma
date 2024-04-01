import React from 'react';
import './OrderForm.css'; // Подключаем CSS-стили для формы

function OrderForm() {
  return (
    <form className="decor">
      <div className="order-form-left-decoration"></div>
      <div className="order-form-right-decoration"></div>
      <div className="circle"></div>
      <div className="order-form-inner">
        <h3>Order</h3>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Address..." rows="3"></textarea>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default OrderForm;
