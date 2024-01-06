import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Header name="Jack" />

      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my portfolio! Explore my projects and learn more about me.
        </p>
        <a
          className="App-link"
          href="https://github.com/TerminalGambit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </main>

      <Footer />
    </div>
  );
}

export default App;

