import React, { useState } from 'react';

function UserInput({ onSearch, onInputClick, isLoading }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onSearch(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="user-container">
      <p>Enter Your LeetCode-Username Below:</p>
      <div className="user-input-container">
        <input
          type="text"
          placeholder="Please enter your username"
          id="user-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={onInputClick}
          onKeyPress={handleKeyPress}
        />
        <button 
          id="search-btn" 
          onClick={handleSubmit}
          disabled={isLoading}
        >
          <span>{isLoading ? 'Generating...' : 'Generate'}</span>
          <span className="material-symbols-outlined">
            query_stats
          </span>
        </button>
      </div>
    </div>
  );
}

export default UserInput;