import React, { useState } from 'react';

import NavBar from '../../components/navBar/NavBar';
import Bouton from '../../components/bouton/Bouton';
import AlaUne from './AlaUne/AlaUne';

import './homeTerminal.css';

const HomeTerminal = () => {



  // ==================== DECLARATION VARIABLE ==================== //



  const verificationAuth = sessionStorage.getItem('auth');

  const [fenetre, fenetreSet] = useState('A la une');



  // ==================== ==================== //



  return (
    <div className='homeTerminalConteneur'>
      <NavBar />
      <div className="secondConteneur">
        <div className="sectionOnglet">
          <div className="haut">
            <Bouton className='alaune ongletFenetre' label='A la une' onClick={() => {fenetreSet('A la une')}} />
            <Bouton className='decouvrir ongletFenetre' label='Découvrir' onClick={() => {fenetreSet('Découvrir')}} />
            <Bouton className='rechercher ongletFenetre' label='Rechercher' onClick={() => {fenetreSet('Rechercher')}} />
            <Bouton className='compositeur ongletFenetre' label='Compositeur' onClick={() => {fenetreSet('Compositeur')}} />
            <Bouton className='mecontacter ongletFenetre' label='Me contacter' onClick={() => {fenetreSet('Me contacter')}} />
            <Bouton className='discussion ongletFenetre' label='Discussion' onClick={() => {fenetreSet('Discussion')}} />
            <Bouton className='bitler ongletFenetre' label='Bitler' onClick={() => {fenetreSet('Bitler')}} />
          </div>
          { verificationAuth === 'true' ? (
            <div className="bas">
              <Bouton className='monprofil ongletFenetre' label='Mon profil' onClick={() => {fenetreSet('Mon profil')}} />
            </div>
          ) : null }
        </div>
        <div className="sectionFenetre">
          { fenetre === 'A la une' ? (
            <AlaUne />
          ) : null }
        </div>
      </div>
    </div>
  )
}

export default HomeTerminal