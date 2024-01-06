// src/components/GitHubContributions.js

import React, { useEffect, useState } from 'react';

const GitHubContributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/repos/TerminalGambit', {
        headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
      });

      const data = await response.json();
      setContributions(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>My GitHub Contributions</h2>
      {Array.isArray(contributions) && contributions.map((repo, index) => (
        <div key={index}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );  
};

export default GitHubContributions;
