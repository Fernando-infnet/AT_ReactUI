import { useState } from 'react';

const useLoadingDelay = (delay = 2000) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = (callback) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      callback();
    }, delay);
  };

  return [isLoading, startLoading];
};

export default useLoadingDelay;