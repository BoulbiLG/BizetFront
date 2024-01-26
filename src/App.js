import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GlobalProvider  as  GlobalColisionContext} from './variableGlobal/colision';

import HomeTerminal from './page/home/HomeTerminal';

function App() {
  return (

        <GlobalColisionContext >
          <Router>
            <Routes>
              <Route path="/" element={<HomeTerminal />} />
            </Routes>
          </Router>
        </GlobalColisionContext>

  );
}

export default App;
