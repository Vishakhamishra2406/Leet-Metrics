import React, { useState } from 'react';
import ProgressCircle from './ProgressCircle';
import StatsCard from './StatsCard';

function StatsContainer({ userData, username, showStats, error }) {
  const [animationPaused, setAnimationPaused] = useState(false);

  const toggleAnimation = () => {
    setAnimationPaused(!animationPaused);
  };

  if (error) {
    return (
      <div className="stats-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  if (!showStats) {
    return null;
  }

  return (
    <div className="stats-container">
      <div 
        className="name"
        onClick={toggleAnimation}
        style={{ 
          animationPlayState: animationPaused ? 'paused' : 'running'
        }}
      >
        Welcome! {username}
      </div>

      <div className="progress">
        <ProgressCircle
          type="easy"
          solved={userData?.easySolved || 0}
          total={userData?.totalEasy || 0}
          label="Easy"
        />
        <ProgressCircle
          type="medium"
          solved={userData?.mediumSolved || 0}
          total={userData?.totalMedium || 0}
          label="Medium"
        />
        <ProgressCircle
          type="hard"
          solved={userData?.hardSolved || 0}
          total={userData?.totalHard || 0}
          label="Hard"
        />
      </div>

      <StatsCard userData={userData} />
    </div>
  );
}

export default StatsContainer;