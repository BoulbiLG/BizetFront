import React, { useState, useEffect } from 'react';

import './commentaire.css';

import {envoieCommentaire} from './API';

import Bouton from '../bouton/Bouton';

const Commentaire = ({ identifiant }) => {

    const [commentaire, commentaireSet] = useState('');
    const [commentaireData, commentaireDataSet] = useState([]);

    const envoieCommentaireBrut = async () => {
        try {const commentaireEnvoie = await envoieCommentaire(commentaire, identifiant);recuperationCommentaireBrut(identifiant)} 
        catch (error) {console.error("Erreur lors de la récupération des données:", error);}
    }

    const recuperationCommentaireBrut = async (identifiant) => {
        try {const commentaireEnvoie = await envoieCommentaire(identifiant);commentaireDataSet(identifiant)} 
        catch (error) {console.error("Erreur lors de la récupération des données:", error);}
    }

    useEffect(() => {
        recuperationCommentaireBrut(identifiant);
    }, [identifiant]);
    return (
        <div className='commentaireConteneur'>
            <div className="centre2">
                
            </div>
            <div className="centre">
                <p>Poster un commentaire</p>
                <textarea value={commentaire} onChange={(event) => {commentaireSet(event.target.value)}} placeholder='Ecrivez un commentaire...' name="" id="" cols="" rows=""></textarea>
                <Bouton label="Poster le commentaire" onClick={() => {envoieCommentaireBrut()}}/>
            </div>
        </div>
    )
}

export default Commentaire