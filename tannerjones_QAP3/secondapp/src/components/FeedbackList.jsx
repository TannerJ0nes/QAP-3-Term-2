import React, { useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const { feedback, getFeedbackData } = useContext(FeedbackContext);

  useEffect(() => {
    // Fetch feedback data when the component mounts
    getFeedbackData();
  }, [getFeedbackData]);

  if (!feedback) {
    return <p>Loading...</p>; // Or any loading indicator you prefer
  }

  return (
    <div>
      {feedback.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <ul>
          {feedback.map((item) => (
            <li key={item.id}>
              <FeedbackItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
