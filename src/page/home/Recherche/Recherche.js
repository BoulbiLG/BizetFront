import React, { useState, useEffect } from 'react';

import './recherche.css';

import { useGlobalFenetreAlaUneContext } from '../../../variableGlobal/fenetreAlaUne';

import { recuperationMusiqueRecherche } from './API';
import PageMusique from '../../../components/pageMusique/PageMusique';

const AlaUne = () => {


  const [musiqueAlaUne, musiqueAlaUneSet] = useState([]);
  const { globalFenetreAlaUne, globalFenetreAlaUneSet } = useGlobalFenetreAlaUneContext();
  const [identifiant, identifiantSet] = useState('');

  const [recherche, rechercheSet] = useState('');


  // ==================== RECUPERATION MUSIQUE A LA UNE ==================== //


  useEffect(() => {
    const fetchData = async () => {
      try {const data = await recuperationMusiqueRecherche(recherche);musiqueAlaUneSet(data);} 
      catch (error) {console.error("Erreur lors de la récupération des données:", error);}
    };
    fetchData();
  }, [recherche]);

  return (
    <div className='rechercheConteneur'>
      {globalFenetreAlaUne === 'liste' ? (
        <div className="musiqueAlaUne">
          <div className="input">
            <input className='recherche' value={recherche} onChange={(event) => {rechercheSet(event.target.value)}} placeholder='Recherchez une musique par titre...' type="text" />
          </div>
          <div className="listeCarte">
            {musiqueAlaUne.map((entry) => (
              <div className="carteMusique" key={entry._id} onClick={() => {identifiantSet(entry.identifiant); globalFenetreAlaUneSet('page')}}>
                <div className="haut">
                  <p className='titre'>{entry.titre}</p>
                  <p className='contenu'>{entry.contenu}</p>
                </div>
                <div className="image" style={{backgroundImage: `url(${entry.image})`}}></div>
                  <div className="tags">
                    {entry.tag.map((entre, index) => (
                      <>
                        { entre === 'Mélancolique' ? (<span className="tag melancolique" key={index}>{entre}</span>) : null}
                        { entre === 'Epique' ? (<span className="tag epique" key={index}>{entre}</span>) : null}
                        { entre === 'Glorieux' ? (<span className="tag glorieux" key={index}>{entre}</span>) : null}
                        { entre === 'Nostalgique' ? (<span className="tag nostalgique" key={index}>{entre}</span>) : null}
                        { entre === 'Vif' ? (<span className="tag vif" key={index}>{entre}</span>) : null}
                        { entre === 'Dramatique' ? (<span className="tag dramatique" key={index}>{entre}</span>) : null}
                        { entre === 'Lugubre' ? (<span className="tag lugubre" key={index}>{entre}</span>) : null}
                        { entre === 'Joyeux' ? (<span className="tag joyeux" key={index}>{entre}</span>) : null}
                        { entre === 'Noble' ? (<span className="tag noble" key={index}>{entre}</span>) : null}
                        { entre === 'Doux' ? (<span className="tag doux" key={index}>{entre}</span>) : null}
                        { entre === 'Romantique' ? (<span className="tag romantique" key={index}>{entre}</span>) : null}
                      </>
                    ))}
                  </div>
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
