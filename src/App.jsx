import { useState } from 'react'
import React from 'react';
import useCounter from './useCounter';

function App() {
  const count = useCounter(0, 2);

  return (
    <div>
      <h1>My Counter App</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
