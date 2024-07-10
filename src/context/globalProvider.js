'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import themes from './themes';

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(0);

  const theme = themes[selectedTheme];

  const changeNightMode = () => {
    setNightMode(!nightMode);
  };

  useEffect(() => {
    nightMode ? setSelectedTheme(0) : setSelectedTheme(1);
  }, [nightMode]);

  return (
    <GlobalContext.Provider value={{ nightMode, changeNightMode, theme }}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdateState = () => useContext(GlobalUpdateContext);
