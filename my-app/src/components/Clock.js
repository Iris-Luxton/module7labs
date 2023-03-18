//  @TODO2 - Create a Clock component and add tho the app.

import React, { useState, useEffect} from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
