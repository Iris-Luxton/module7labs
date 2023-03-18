//  @TODO3 - Completely migrate the Emoji component into a separate one with its own state (leave App 
// component to be stateless) - with the help of Dashboard.
import React, { useContext } from 'react';
import { MoodContext } from './MoodContext';

const Emoji = () => {
  const { mood } = useContext(MoodContext);

  return <div>{mood}</div>;
};

export default Emoji;