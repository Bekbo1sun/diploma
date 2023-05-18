import { FaPhone, FaEnvelope, FaUser } from 'react-icons/fa';
import React from 'react';
import "./TechnicalSupport.css";

export default function TechnicalSupport () {

  const handlePhoneClick = () => {
    window.location.href = 'tel:+996552005753';
  };

  return (
    <div className='Technical-Support'>
      <h2>Delivery Information</h2>

      <h3>Delivery Schedule</h3>
      <p>
        Delivery is available from Monday to Friday, 9:00 AM to 6:00 PM. We also
        offer Saturday delivery from 10:00 AM to 4:00 PM.
      </p>

      <h3>Delivery Cost</h3>
      <p>
        The delivery cost is calculated based on the distance and weight of the
        order. Please contact us for accurate information about the delivery
        cost.
      </p>

      <h3>Payment Options</h3>
      <p>
        We accept cash, credit cards, and electronic payment systems for
        delivery orders.
      </p>

      <h3>Delivery Process Description</h3>
      <p>
        After placing your order, you will receive a confirmation to your
        provided email address. The delivery will be made to the specified
        address by our courier. Please be ready to accept the order and make
        payment if cash on delivery is chosen.
      </p>

      <h3>Order Tracking</h3>
      <p>
        You will be able to track the status of your order on our website. You
        will be provided with a unique order number that can be used to find out
        the location of your order and the expected delivery time.
      </p>

      <h3>Returns and Exchanges Policy</h3>
      <p>
        If the product is damaged during delivery or does not meet your
        expectations, please contact us within 24 hours of receiving the order
        to arrange for a return or exchange. We will provide you with the
        necessary information about the process and assist you with returning or
        exchanging the product.
      </p>

      <h3>Contact Information</h3>
      <p>
        You can contact us for additional information about delivery or to get
        answers to your questions:
      </p>

        <ul className="Links">
          <li onClick={handlePhoneClick}>
            <FaPhone /><a href="https://web.whatsapp.com/"> +996(552)-00-57-53</a>
          </li>
          <li>
            <FaEnvelope /><a href="https://mail.google.com/"> bekbolsunzarmamatov@gmail.com</a>
          </li>
          <li>
            <FaUser /><a href="https://example.com/contact"> Contact Us</a>
          </li>
        </ul>
    </div>
  );
};