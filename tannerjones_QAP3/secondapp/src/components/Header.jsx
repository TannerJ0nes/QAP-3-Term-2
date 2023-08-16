import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css'; // Create a separate CSS file for the header styles


const Header = ({ text, bgColor, textColor }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  Header.defaultProps = {
    text: 'Feedback App',
    bgColor: 'rgba(0,0,0,0.5)',
    textColor: '#f3f31c',
  };

  return (
    <header className="py-3 px-4" style={headerStyle}>
      {text}
      <center><nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/feedback">View Feedback</Link>
          </li>
          
        </ul>
      </nav>
      </center>
      
    </header>
    
  );
};

Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'rgba(0,0,0,0.5)',
  textColor: '#f3f31c',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
