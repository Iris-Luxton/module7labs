import React, { useContext } from 'react';
import { MoodContext } from './MoodContext';

const ChangeMoodButton = () => {
  const { changeMood } = useContext(MoodContext);

  return <button onClick={changeMood}>Change Mood</button>;
};

export default ChangeMoodButton;