import React, { useState } from 'react';

import { dataMiniature, dataComplete } from './Options';

import './bitler.css';

const Bitler = () => {

  const [affichageFenetre, affichageFenetreSet] = useState('liste');
  const [sectionDeroulement, sectionDeroulementSet] = useState('false');
  const [dataID, dataIDSet] = useState([]);

  const carteClique = (id) => {
    affichageFenetreSet('page');
    const extraction = dataComplete.filter(item => item.ID === id);
    console.log(extraction);
    dataIDSet(extraction);
  }

  return (
    <div className='bitlerConteneur'>
      {affichageFenetre === "liste" ? (
        <div className="autreConteneur">
            <h1>Archive de Bitler</h1>
            <p className='descriptionSection'>Ce site internet archive également le travail du forumeur du forum blabla 18 25 de JeuxVideo.com et du forum Onche.org</p>
            <div className="listeCarte">
              {dataMiniature.map((entry) => (
                <div className="enveloppe">
                  {entry.ID !== "" ? (
                    <div className="carteBitler" onClick={() => {carteClique(entry.ID)}}>
                      <div className="gauche" style={{backgroundImage: `url(${entry.image})`}}></div>
                      <div className="droite">
                        <p>{entry.titre}</p>
                      </div>
                    </div>
                  ) : null }
                </div>
              ))}
            </div>
        </div>
      ) : null }
      {affichageFenetre === "page" ? (
        <div className="pageBitlerConteneur">
          <div className="secondConteneurBitler">
            {dataID.map((entry) => (
              <>
                <p className='titre'>{entry.titre}</p>
                <div className="sectionVideo">
                  {entry.lienInfo.type === "youtube" ? (
                    <iframe width="504" height="283" 
                    src={`https://www.youtube.com/embed/${entry.lienInfo.lien}`}
                    title={`YouTube video player`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen >
                    </iframe>
                  ) : null }
                  {entry.lienInfo.type === "youtube" && entry.section === 'true' ? (
                    <>
                      <p>Sommaire</p>
                      <hr />
                      {sectionDeroulement === 'true' ? (
                        <div className="deroulementTrue">
                          {entry.sommaire.map((item) => (
                            <p className="item">{item}</p>
                          ))}
                          <button className='deroulementBtn' onClick={() => {sectionDeroulementSet('false')}}>Afficher moins</button>
                        </div>
                      ) : 
                        <div className="deroulementFalse">
                          {entry.sommaire.slice(0, 3).map((item, index) => (
                            <p className="item" key={index}>{item}</p>
                          ))}
                          <button className='deroulementBtn' onClick={() => {sectionDeroulementSet('true')}}>Afficher plus</button>
                        </div>
                      }
                    </>
                  ) : null }
                </div>
                <button className='retour' onClick={() => {affichageFenetreSet('liste')}}>Retour à la liste</button>
                <div className="description">
                  <p>{entry.description}</p>
                </div>
                <div className="listeLien">
                  <p>Lien annexe</p>
                  <hr />
                  {entry.lienExterne.map((lien) => (
                    <>
                      <a href={lien} target="_blank" rel="noopener noreferrer" >{lien}</a>
                    </>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      ) : null }
    </div>
  )
}

export default Bitler