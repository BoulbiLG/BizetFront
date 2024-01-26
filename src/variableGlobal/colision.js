import React, { createContext, useContext, useState } from 'react';

const GlobalColisionContext = createContext();

export const useGlobalColisionContext = () => {
  return useContext(GlobalColisionContext);
};

export const GlobalProvider  = ({ children }) => {
  const [globalColision, globalColisionSet] = useState('liste');

  return (
    <GlobalColisionContext.Provider value={{ globalColision, globalColisionSet }}>
      {children}
    </GlobalColisionContext.Provider>
  );
};