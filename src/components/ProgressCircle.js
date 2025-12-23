import React, { useEffect, useState } from 'react';

function ProgressCircle({ type, solved, total, label }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const percentage = total ? (solved / total) * 100 : 0;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [percentage]);
  
  const circleStyle = {
    '--progress-degree': `${animatedPercentage * 3.6}deg`
  };

  return (
    <div className="progress-item">
      <div 
        className={`${type}-progress circle`}
        style={circleStyle}
      >
        <span>{solved}/{total}</span>
        {label}
      </div>
    </div>
  );
}

export default ProgressCircle;