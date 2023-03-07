import React from "react";
import { Star } from "./Star";

export const Stars = ({ count }) => {

  const countIsValid = typeof count === 'number' && count >= 1 && count <=5;
  const stars = countIsValid ? [...Array(count).keys()] : null;

  return (
    <ul className="card-body-stars">
      {stars && stars.map(star => <li key={star}><Star /></li>)}
    </ul>
  )
}

Stars.defaultProps = {
  count: 0,
}