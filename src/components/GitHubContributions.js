// src/components/GitHubContributions.js

import React, { useEffect, useState } from 'react';

const GitHubContributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('https://api.github.com/users/TerminalGambit/repos', {
            headers: {
              Authorization: `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` // Replace with your GitHub token
            }
          });
      
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
      
          const data = await response.json();
          setContributions(data);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
      

    fetchData();
  }, []);

  return (
    <div>
      <h2>My GitHub Contributions</h2>
      {contributions.map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description || 'No description available'}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Repository</a>
        </div>
      ))}
    </div>
  );
};

export default GitHubContributions;
