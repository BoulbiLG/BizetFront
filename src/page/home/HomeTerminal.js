import React, { useState } from 'react';

import NavBar from '../../components/navBar/NavBar';
import Bouton from '../../components/bouton/Bouton';
import AlaUne from './AlaUne/AlaUne';
import Recherche from './Recherche/Recherche';
import ProfilTerminal from '../profil/ProfilTerminal';
import Contact from './contact/Contact';
import Bitler from './bitler/Bitler';

import { useGlobalFenetreAlaUneContext } from '../../variableGlobal/fenetreAlaUne';

import './homeTerminal.css';

const HomeTerminal = () => {



  // ==================== DECLARATION VARIABLE ==================== //


  const { globalFenetreAlaUne, globalFenetreAlaUneSet } = useGlobalFenetreAlaUneContext();
  console.log(globalFenetreAlaUne);
  const verificationAuth = sessionStorage.getItem('auth');

  const [fenetre, fenetreSet] = useState('A la une');
  const [styleHaut2, styleHaut2Set] = useState({});
  const [styleMenuBtn, styleMenuBtnSet] = useState({animation: 'arrive 0.2s ease-in-out forwards'});


  // ==================== ==================== //


  return (
    <div className='homeTerminalConteneur'>
      <NavBar />
      <div className="secondConteneur">
        <div className="sectionOnglet">
          <div className="haut">
            <Bouton className='alaune ongletFenetre' label='A la une' onClick={() => {fenetreSet('A la une'); globalFenetreAlaUneSet('liste')}} />
            {/*<Bouton className='decouvrir ongletFenetre' label='Découvrir' onClick={() => {fenetreSet('Découvrir')}} />*/}
            <Bouton className='rechercher ongletFenetre' label='Rechercher' onClick={() => {fenetreSet('rechercher'); globalFenetreAlaUneSet('liste')}} />
            {/*<Bouton className='compositeur ongletFenetre' label='Compositeur' onClick={() => {fenetreSet('Compositeur')}} />*/}
            <Bouton className='mecontacter ongletFenetre' label='Me contacter' onClick={() => {fenetreSet('contact'); globalFenetreAlaUneSet('liste')}} />
            {/*<Bouton className='discussion ongletFenetre' label='Discussion' onClick={() => {fenetreSet('Discussion')}} />*/}
            <Bouton className='bitler ongletFenetre' label='Archive de Bitler' onClick={() => {fenetreSet('bitler'); globalFenetreAlaUneSet('liste')}} />
            { verificationAuth === 'true' ? (
              <div className="bas">
                <Bouton className='monprofil ongletFenetre' label='Mon profil' onClick={() => {fenetreSet('profil'); globalFenetreAlaUneSet('liste')}} />
              </div>
            ) : null }
          </div>
          <div className="haut2" style={styleHaut2}>
            <Bouton className='alaune ongletFenetre' label='A la une' onClick={() => {fenetreSet('A la une'); globalFenetreAlaUneSet('liste')}} />
            {/*<Bouton className='decouvrir ongletFenetre' label='Découvrir' onClick={() => {fenetreSet('Découvrir')}} />*/}
            <Bouton className='rechercher ongletFenetre' label='Rechercher' onClick={() => {fenetreSet('rechercher'); globalFenetreAlaUneSet('liste')}} />
            {/*<Bouton className='compositeur ongletFenetre' label='Compositeur' onClick={() => {fenetreSet('Compositeur')}} />*/}
            <Bouton className='mecontacter ongletFenetre' label='Me contacter' onClick={() => {fenetreSet('contact'); globalFenetreAlaUneSet('liste')}} />
            {/*<Bouton className='discussion ongletFenetre' label='Discussion' onClick={() => {fenetreSet('Discussion')}} />*/}
            <Bouton className='bitler ongletFenetre' label='Archive de Bitler' onClick={() => {fenetreSet('bitler'); globalFenetreAlaUneSet('liste')}} />
            { verificationAuth === 'true' ? (
              <div className="bas">
                <Bouton className='monprofil ongletFenetre' label='Mon profil' onClick={() => {fenetreSet('profil'); globalFenetreAlaUneSet('liste')}} />
              </div>
            ) : null }
            <div className="fermerSection">
              <Bouton className='fermer ongletFenetre' label='Fermer' onClick={() => {
                styleHaut2Set({animation: 'disparition 0.2s ease-in-out forwards'});
                styleMenuBtnSet({animation: 'arrive 0.2s ease-in-out forwards'});
              }}/>
            </div>
          </div>
          <div className="menuSectionBtn" style={styleMenuBtn}>
            <button className='menuOnglet ongletFenetre' label='Menu' onClick={() => {
              styleHaut2Set({animation: 'arrive 0.2s ease-in-out forwards'});
              styleMenuBtnSet({animation: 'disparition 0.2s ease-in-out forwards'});
            }}>Menu</button>
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