import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FeedbackProvider } from './context/FeedbackContext'; // Import the FeedbackProvider
import 'bootstrap/dist/css/bootstrap.min.css';


// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Router>
    <FeedbackProvider> {/* Wrap the App component with FeedbackProvider */}
      <App />
    </FeedbackProvider>
  </Router>
);

reportWebVitals();
