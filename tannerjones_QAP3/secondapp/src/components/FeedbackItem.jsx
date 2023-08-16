// FeedbackItem.jsx
import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, getSingleFeedback } = useContext(FeedbackContext);

  // Add a check for undefined item
  if (!item) {
    return null;
  }

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={() => {
          deleteFeedback(item.id);
        }}
      >
        <FaTimes />
      </button>
      <button onClick={() => getSingleFeedback(item.id)} className="edit">
        <FaEdit color="green" />
      </button>
      <div className="text-display">{item.text}</div>
    </div>
  );
};

export default FeedbackItem;
