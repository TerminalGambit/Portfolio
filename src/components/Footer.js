// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Assuming you will create a CSS file for styling

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>© {new Date().getFullYear()} Jack Massey. All rights reserved.</p>
      <p>
        Connect with me on 
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"> LinkedIn</a> or
        <a href="https://github.com/TerminalGambit" target="_blank" rel="noopener noreferrer"> GitHub</a>.
      </p>
    </footer>
  );
};

export default Footer;
