import React, { useState } from "react";
import Card from "./Card";

export const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightHandler() {
    if (index + 1 > reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div>
      <Card review={reviews[index]}></Card>

      <div>
        <button onClick={leftHandler}>+</button>
        <button onClick={rightHandler}>-</button>
      </div>

      <div>
        <button onClick={surpriseHandler}>Surprise Me</button>
      </div>
    </div>
  );
};

export default Testimonial;

