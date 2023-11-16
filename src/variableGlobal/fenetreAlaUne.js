import React, { createContext, useContext, useState } from 'react';

const GlobalFenetreAlaUneContext = createContext();

export const useGlobalFenetreAlaUneContext = () => {
  return useContext(GlobalFenetreAlaUneContext);
};

export const GlobalProvider  = ({ children }) => {
  const [globalFenetreAlaUne, globalFenetreAlaUneSet] = useState('liste');

  return (
    <GlobalFenetreAlaUneContext.Provider value={{ globalFenetreAlaUne, globalFenetreAlaUneSet }}>
      {children}
    </GlobalFenetreAlaUneContext.Provider>
  );
};