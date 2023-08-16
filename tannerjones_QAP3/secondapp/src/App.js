import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AllFeedback from './components/AllFeedback';
import { FeedbackProvider } from './context/FeedbackContext';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  console.log('Rendering App component');
  return (
    <FeedbackProvider>
      <Header />
      <div className="App">
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<AllFeedback />} />
           
          </Routes>
        </main>
      </div>
    </FeedbackProvider>
  );
};

export default App;
