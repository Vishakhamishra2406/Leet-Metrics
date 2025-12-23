import React, { useState } from 'react';
import UserInput from './components/UserInput';
import StatsContainer from './components/StatsContainer';

function App() {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showStats, setShowStats] = useState(false);

  const validateUsername = (username) => {
    if (username === "") {
      alert("Username should not be empty");
      return false;
    }
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching = regex.test(username);
    if (!isMatching) alert("Invalid username");
    return isMatching;
  };

  const fetchUserDetails = async (username) => {
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
    try {
      setIsLoading(true);
      setError('');
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Unable to fetch user-details...");
      }
      
      const data = await response.json();
      if (data.status === "error" || data.message === "user does not exist") {
        throw new Error("User not found or API error.");
      }
      
      setUserData(data);
      setShowStats(true);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setError("Error fetching user details!");
      setShowStats(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (inputUsername) => {
    setUsername(inputUsername);
    if (validateUsername(inputUsername)) {
      fetchUserDetails(inputUsername);
    }
  };

  const handleInputClick = () => {
    setShowStats(false);
    setError('');
  };

  return (
    <div className="container">
      <div className="irregular-shape">
        <h1>Leet-Metric</h1>
      </div>
      
      <UserInput 
        onSearch={handleSearch}
        onInputClick={handleInputClick}
        isLoading={isLoading}
      />
      
      <StatsContainer 
        userData={userData}
        username={username}
        showStats={showStats}
        error={error}
      />
    </div>
  );
}

export default App;