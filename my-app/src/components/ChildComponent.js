import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default ChildComponent;