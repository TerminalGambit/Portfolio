import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="project-card">
                <h3>A Stock Prediction AI</h3>
                <p>
                    This project is a Stock Prediction AI developed by TerminalGambit.
                    You can find the code on GitHub:
                    <a href="https://github.com/TerminalGambit/StockPredictionWithAI">
                        Stock Prediction AI GitHub
                    </a>
                </p>
            </div>
            <div className="project-card">
                <h3>BlackJack AI</h3>
                <p>
                    This project is a BlackJack AI developed by TerminalGambit.
                    You can find the code on GitHub:
                    <a href="https://github.com/TerminalGambit/BlackJackAI">
                        BlackJack AI GitHub
                    </a>
                </p>
            </div>
            <div className="project-card">
                <h3>Poker AI</h3>
                <p>
                    This project is a Poker AI developed by TerminalGambit.
                    You can find the code on GitHub:
                    <a href="https://github.com/TerminalGambit/PokerAI">
                        Poker AI GitHub
                    </a>
                </p>
            </div>
            <div className="project-card">
                <h3>Advent of Code Solutions</h3>
                <p>
                    This project contains solutions for Advent of Code challenges developed by TerminalGambit.
                    You can find the code on GitHub:
                    <a href="https://github.com/TerminalGambit/AOC">
                        Advent of Code GitHub
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Projects;