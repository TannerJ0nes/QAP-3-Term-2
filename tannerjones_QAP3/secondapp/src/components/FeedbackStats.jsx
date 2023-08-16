// FeedbackStats.jsx
import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!Array.isArray(feedback) || feedback.length === 0) {
    // Handle the case when feedback is not an array or is empty
    return <p>Loading...</p>; // You can return some loading state or message
  }

  let average =
    feedback.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <h3>Average Rating: {average}</h3>
    </div>
  );
};

export default FeedbackStats;
