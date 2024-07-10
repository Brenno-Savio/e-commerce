'use client';

import { GlobalProvider } from '@/context/globalProvider';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

function ContextProvider({ children }: Props) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);

  if (!isReady) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  return <GlobalProvider>{children}</GlobalProvider>;
}

export default ContextProvider;
