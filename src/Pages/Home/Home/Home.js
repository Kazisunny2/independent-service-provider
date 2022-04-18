import React from "react";
import Banner from "../Banner/Banner";
import Photos from "../Photos/Photos";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <br />
      <h2 className="text-primary text-center mt-2">Our Group Photos</h2>
      <Photos></Photos>
    </div>
  );
};

export default Home;
