import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jfif";
import banner3 from "../../../images/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Reykjavik</h3>
          <p>
            Unlike most European capitals, the city is quiet and you can walk
            its central area easily. A top tip is to visit one of its multiple
            book stores as locals love to read and theres always new work
            published, especially in the fiction area with a local influence.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Godafoss Waterfalls:</h3>
          <p>
            One of the most popular waterfalls in Iceland, Godafoss is also a
            waterfall found in the Skjalfandafljot glacier river and stands with
            a height of 12 meters and a width of over 30 meters. This “Waterfall
            of the Gods” was also nicknamed by one local as “The Beauty”.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>North Iceland</h3>
          <p>
            The landscapes are filled with snowy mountain peaks and green
            meadows, but the area doesn’t lack wild canyons or waterfalls
            either. The steaming geothermal fields and whale-filled bays only
            add to the touristic value of this remarkable region.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
