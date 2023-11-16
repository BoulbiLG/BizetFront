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
      ) : null }
      {globalFenetreAlaUne !== 'liste' ? (
        <PageMusique identifiant={identifiant} />
      ) : null }
    </div>
  );
};

export default AlaUne;
