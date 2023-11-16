import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GlobalProvider  as  GlobalFenetreAlaUneContext} from './variableGlobal/fenetreAlaUne';

import HomeTerminal from './page/home/HomeTerminal';
import LoginTerminal from './page/login/LoginTerminal';
import ProfilTerminal from './page/profil/ProfilTerminal';
import RegisterTerminal from './page/register/RegisterTerminal';

function App() {
  return (
    <GlobalFenetreAlaUneContext >
      <Router>
        <Routes>
          <Route path="/" element={<HomeTerminal />} />
          <Route path="/login" element={<LoginTerminal />} />
          <Route path="/profil" element={<ProfilTerminal />} />
          <Route path="/register" element={<RegisterTerminal />} />
        </Routes>
      </Router>
    </GlobalFenetreAlaUneContext >
  );
}

export default App;
