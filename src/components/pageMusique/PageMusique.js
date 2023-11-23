import React, { useState, useEffect } from 'react';

import { useGlobalFenetreAlaUneContext } from '../../variableGlobal/fenetreAlaUne';

import './pageMusique.css';

import { recuperationMusiqueLien, recuperationMusiqueInfo } from './API';
import Carrousel from '../caroussel/Caroussel';
import Commentaire from '../commentaire/Commentaire';

const AlaUne = ({ identifiant }) => {


    const [donneMusiqueLien, donneMusiqueLienSet] = useState([]);
    const [donneMusiqueInfo, donneMusiqueInfoSet] = useState([]);
    const { globalFenetreAlaUne, globalFenetreAlaUneSet } = useGlobalFenetreAlaUneContext();
    console.log(globalFenetreAlaUne);


    // ==================== ENVOIE LIKE ==================== //

    /*
    const envoieLikeBrut = async (like, identifiant) => {
        try {const likeEnvoie = await envoieLike(like, identifiant);selectionDonnePageMusique(identifiant)} 
        catch (error) {console.error("Erreur lors de la récupération des données:", error);}
    };
    */


    // ==================== SELECTION DONNEE PAGE MUSIQUE ==================== //

    const selectionDonnePageMusique = async (identifiant) => {
        try {const dataLien = await recuperationMusiqueLien(identifiant);donneMusiqueLienSet(dataLien);} 
        catch (error) {console.error("Erreur lors de la récupération des données:", error);}
        try {const dataInfo = await recuperationMusiqueInfo(identifiant);donneMusiqueInfoSet(dataInfo);} 
        catch (error) {console.error("Erreur lors de la récupération des données:", error);}
    };

    useEffect(() => {
        selectionDonnePageMusique(identifiant);
    }, [identifiant]);

    return (
        <div className='AlaUneConteneur'>
            <div className="centrePageMusique">
                <div className="pageMusique">
                { donneMusiqueInfo && donneMusiqueLien ? (
                    <>
                    {donneMusiqueInfo.map((info) => (
                        <div className='pageContenu'>
                        <div className="titre">
                            <div className="info">
                            <h1>{info.titre}</h1>
                            <p className='de'>De</p>
                            <div className='parution'><p className='compositeur'>{info.compositeur}</p><p>, paru en {info.date}</p></div>
                            </div>
                        </div>
                        <div className="horizontal">
                        <div className="integration">
                            <Carrousel donnees={donneMusiqueLien}/>
                            </div>
                            <div className="fin">
                                <div className='autre'>
                                    <p className='contenu'>Pour {info.contenu}</p>
                                    <p className='description'>{info.info}</p>
                                    <div className="boutonAction">
                                    <button onClick={() => {globalFenetreAlaUneSet('liste')}}>Retour à la liste</button>
                                    {/*<div className="likeConteneur">
                                    <button className='like' onClick={() => {envoieLikeBrut(info.like, identifiant)}}></button>
                                    <p>{info.like}</p>
                                    </div>*/}
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    <Commentaire identifiant={identifiant}/>
                    </>
                ) : null }
                </div>
            </div>
        </div>
    );
};

export default AlaUne;
