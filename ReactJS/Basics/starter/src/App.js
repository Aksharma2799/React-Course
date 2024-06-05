import React from "react";
import Testimonial from "./componets/Testimonial";
import reviews from "./data";

const App = () => {
  return <div className="flex flex-col w-[100vh] h-[100vh] justify-center items-center bg-green-200">
    <div>
      <h1>Our Testimonial</h1>
      <div className="bg-voilet-400"></div>
      <Testimonial reviews = {reviews}/>
    </div>
  </div>;
};

export default App;
