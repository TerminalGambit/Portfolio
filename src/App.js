import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';
import Projects from './components/Projects'; // Import the Projects component

function App() {
  return (
    <div className="App">
      <Header name="Jack" />

      <div className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my portfolio! Explore my projects and learn more about me.
        </p>
        <h2>Projects</h2>
        <Projects /> {/* Add the Projects component */}
        <a
          className="App-link"
          href="https://github.com/TerminalGambit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </div>

      <Footer />
    </div>
  );
}
export default App;

