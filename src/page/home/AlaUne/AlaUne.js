import React, { useState, useEffect } from 'react';

import './alaUne.css';

import { useGlobalFenetreAlaUneContext } from '../../../variableGlobal/fenetreAlaUne';

import { recuperationMusiqueAlaUne } from './API';
import PageMusique from '../../../components/pageMusique/PageMusique';

const AlaUne = () => {


  const [musiqueAlaUne, musiqueAlaUneSet] = useState([]);
  const { globalFenetreAlaUne, globalFenetreAlaUneSet } = useGlobalFenetreAlaUneContext();
  const [identifiant, identifiantSet] = useState('');


  // ==================== RECUPERATION MUSIQUE A LA UNE ==================== //


  useEffect(() => {
    const fetchData = async () => {
      try {const data = await recuperationMusiqueAlaUne();musiqueAlaUneSet(data);} 
      catch (error) {console.error("Erreur lors de la récupération des données:", error);}
    };
    fetchData();
  }, []);

  return (
    <div className='AlaUneConteneur'>
      {globalFenetreAlaUne === 'liste' ? (
        <div className="musiqueAlaUne">
          <div className="section1">
            <div className="haut">
              <div>
                <h3 className='titre'>La Bizeterie</h3>
                <p>est un site internet ayant pour but de <br />faire découvrir le patrimoine musical français</p>
                <p className='avertissement'>Ce site est hébergé gratuitement, d'où sa lenteur et peux parfois planter. Raffraichissez la page dans ces cas la.</p>
              </div>
            </div>
          </div>
          <div className="listeMusiqueAlaUne">
            {musiqueAlaUne.map((entry) => (
              <div className="carteMusique" key={entry._id} onClick={() => {identifiantSet(entry.identifiant); globalFenetreAlaUneSet('page')}}>
                <div className="haut">
                  <p className='titre'>{entry.titre}</p>
                  <p className='contenu'>{entry.contenu}</p>
                </div>
                <div className="image" style={{backgroundImage: `url(${entry.image})`}}></div>
              </div>
            ))}
          </div>
        </div>
      ) : null }
      {globalFenetreAlaUne !== 'liste' ? (
        <PageMusique identifiant={identifiant} />
      ) : null }
    </div>
  );
};

export default AlaUne;
