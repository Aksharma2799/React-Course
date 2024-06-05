/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const Card = (props) => {
  let review = props.review;
  return (
    <div>
      <div className="Image">
        <img src={review.image} />
      </div>
      <div>
        <p> {review.name}</p>
      </div>
      <div>
        <p>{review.job}</p>
      </div>
      <div>
        <FaQuoteLeft />
      </div>
      <div>
        <p>{review.text}</p>
      </div>
      <div>
        <FaQuoteRight />
      </div>
    </div>
  );
};
export default Card;
