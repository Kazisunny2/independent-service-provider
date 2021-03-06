import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="w-100 card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Price:${price}</p>
          <p className="card-text">
            <small>{description}</small>
          </p>
          <button
            onClick={() => navigateToServiceDetail(id)}
            className="btn btn-primary "
          >
            Book Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
