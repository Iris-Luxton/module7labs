import React, { useState } from 'react';
import Clock from './Clock';
import Emoji from './Emoji';
import Modal from "./Modal";
import ChangeMoodButton from './ChangeMoodButton';
import { MoodProvider } from './MoodContext';
// how to Make both Emoji components display the same emoji as one another. 
// then have them both change their emojis when either Change Mood button is pressed. 
// (Hint: use the useContext hook) 
// Your app must make use of React Fragments at least once, you can simply group the elements together using the empty tag syntax <> </>
// instead of adding an extra wrapping element like <div> or <span>, which can cause unwanted side effects like additional styles, 
// unwanted spacing, or extra markup.
const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // 2. Wrap the App component with the context provider
  return (
      <>
        {/* <Emoji symbol="🐶" label="dog" />
        <Emoji symbol="🐱" label="cat" /> */}
       <div>
      <button onClick={handleShowModal}>Open Modal</button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Modal Title</h2>
          <p>Modal content goes here</p>
        </Modal>
      )}
    </div>
      <MoodProvider>
      <Emoji />
      <Emoji />
      <Clock />
      <ChangeMoodButton />
      </MoodProvider>
      </>
  );
}
export default Dashboard;
// The purpose of the MoodContext in this example is to demonstrate 
// how to use useContext hook in React to pass data down the component tree without the need to pass props through every level of the tree.
// the MoodContext is being used to store the current mood, which can be changed 
// by clicking the "Change Mood" button. The Emoji component is then using the current mood from the context 
// to display the corresponding emoji.