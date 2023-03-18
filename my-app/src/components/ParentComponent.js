import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';
// Ref Forwarding - actually I don't really understand the use of it but I know it helps preventing props drilling
const ParentComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleClick}>Focus on input</button>
    </div>
  );
};

export default ParentComponent;