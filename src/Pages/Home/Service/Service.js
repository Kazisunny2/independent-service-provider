import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{name, img, description, price} = service
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div class="card" style={{ width:  "18rem"}}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p>Price:${price}</p>
          <p class="card-text"><small>{description}</small></p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        </div>
    );
};

export default Service;