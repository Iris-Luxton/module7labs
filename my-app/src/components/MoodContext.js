import React, { createContext, useState } from 'react';

const MoodContext = createContext();

const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState('😊');

  const changeMood = () => {
    setMood(mood === '😊' ? '🥺' : '😊');
  };

  return (
    <MoodContext.Provider value={{ mood, changeMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export { MoodContext, MoodProvider };