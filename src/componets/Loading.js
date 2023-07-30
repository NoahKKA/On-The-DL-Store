import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        if (prevText === 'Loading...') return 'Loading';
        return prevText + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-background">
      <div className="loading-container">
        <span className="loading-text">{loadingText}</span>
      </div>
    </div>
  );
};

export default Loading;
