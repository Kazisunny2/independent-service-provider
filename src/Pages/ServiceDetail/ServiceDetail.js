import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div className="serviceDetail-form">
      <h2 className="text">Welcome to details: {serviceId}</h2>
      <form className="text-primary text-center mt-2">
        <input type="name" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Your Email" />
        <input type="address" placeholder="Your Address" />
        <input type="phone number" placeholder="Phone Number" />
      </form>

      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
