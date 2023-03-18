import React from 'react';
import ReactDOM from 'react-dom';
// Your app must make use of a React Portal at least once
const Modal = () => {
    //to create a portal, use the createPortal function:
    return ReactDOM.createPortal(
      <div className="modal">
        <p>This is part of the modal</p>
      </div>,
      document.body
    );
  }

export default Modal;