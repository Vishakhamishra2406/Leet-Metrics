import React from 'react';

function StatsCard({ userData }) {
  const hasIncompleteData = !userData?.mediumSolved || !userData?.hardSolved;

  return (
    <div className="stats-card">
      {hasIncompleteData && (
        <div className="warning-message">
          Some data may be missing due to API limitations.
        </div>
      )}
      
      <div className="card totalSolved">
        Total Problems Solved: {userData?.totalSolved || 0}
      </div>
      
      <div className="card ranking">
        Ranking: {userData?.ranking || "N/A"}
      </div>
      
      <div className="card contribution">
        Contribution Points: {userData?.contributionPoints || "N/A"}
      </div>
      
      <div className="card reputation">
        Reputation: {userData?.reputation || "N/A"}
      </div>
    </div>
  );
}

export default StatsCard;