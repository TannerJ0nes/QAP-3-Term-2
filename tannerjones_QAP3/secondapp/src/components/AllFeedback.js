import React from 'react';
import FeedbackList from './FeedbackList';
import FeedbackStats from './FeedbackStats';
import FeedbackForm from './FeedbackForm';

const AllFeedback = () => {
  return (
    
    <center><div>
        <h2>Add Feedback</h2>
        <br></br>
        <br></br>
      <FeedbackForm />
      <h2>Feedback Stats</h2>
      <FeedbackStats />
      <h2>Feedback List</h2>
      <FeedbackList />

      

      
    </div>
    </center>
  );
};

export default AllFeedback;
