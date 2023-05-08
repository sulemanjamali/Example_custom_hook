import { useState, useEffect } from 'react';

function useCounter(initialValue, step = 1) {
  const [count, setCount] = useState(initialValue);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(c => c + step);
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [step]);
  
  return count;
}

export default useCounter;
