// FeedbackContext.js
import React, { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    fetch("http://localhost:5000/feedback")
      .then((response) => response.json())
      .then((data) => setFeedback(data));
  }, []);

  const addFeedback = (newFeedback) => {
    fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })
      .then((response) => response.json())
      .then((data) => setFeedback([...feedback, data]));
  };

  const updateFeedback = (id, updItem) => {
    fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setFeedback(
          feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
        );
        setFeedbackEdit({ item: {}, edit: false });
      });
  };

  const deleteFeedback = (id) => {
    fetch(`http://localhost:5000/feedback/${id}`, {
      method: "DELETE",
    }).then(() => {
      setFeedback(feedback.filter((item) => item.id !== id));
    });
  };

  const getSingleFeedback = (id) => {
    fetch(`http://localhost:5000/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackEdit({ item: data, edit: true });
      });
  };

  const getFeedbackData = () => {
    fetch("http://localhost:5000/feedback")
      .then((response) => response.json())
      .then((data) => setFeedback(data));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        updateFeedback,
        deleteFeedback,
        getSingleFeedback,
        getFeedbackData,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
