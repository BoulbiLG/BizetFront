import React, { useState } from 'react';

import NavBar from '../../components/navBar/NavBar';
import Bouton from '../../components/bouton/Bouton';
import AlaUne from './AlaUne/AlaUne';
import Recherche from './Recherche/Recherche';
import ProfilTerminal from '../profil/ProfilTerminal';
import Contact from './contact/Contact';
import Bitler from './bitler/Bitler';

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
            {/*<Bouton className='decouvrir ongletFenetre' label='Découvrir' onClick={() => {fenetreSet('Découvrir')}} />*/}
            <Bouton className='rechercher ongletFenetre' label='Rechercher' onClick={() => {fenetreSet('rechercher')}} />
            {/*<Bouton className='compositeur ongletFenetre' label='Compositeur' onClick={() => {fenetreSet('Compositeur')}} />*/}
            <Bouton className='mecontacter ongletFenetre' label='Me contacter' onClick={() => {fenetreSet('contact')}} />
            {/*<Bouton className='discussion ongletFenetre' label='Discussion' onClick={() => {fenetreSet('Discussion')}} />*/}
            <Bouton className='bitler ongletFenetre' label='Bitler' onClick={() => {fenetreSet('bitler')}} />
            { verificationAuth === 'true' ? (
              <div className="bas">
                <Bouton className='monprofil ongletFenetre' label='Mon profil' onClick={() => {fenetreSet('profil')}} />
              </div>
            ) : null }
          </div>
        </div>
        <div className="sectionFenetre">
          { fenetre === 'A la une' ? (
            <AlaUne />
          ) : null }
          { fenetre === 'rechercher' ? (
            <Recherche />
          ) : null }
          { fenetre === 'contact' ? (
            <Contact />
          ) : null }
          { fenetre === 'profil' ? (
            <ProfilTerminal />
          ) : null }
          { fenetre === 'bitler' ? (
            <Bitler />
          ) : null }
        </div>
      </div>
    </div>
  )
}

export default HomeTerminal