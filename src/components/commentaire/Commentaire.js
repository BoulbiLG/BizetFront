import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './commentaire.css';

import {envoieCommentaire, recuperationCommentaire} from './API';

import Bouton from '../bouton/Bouton';

const Commentaire = ({ identifiant }) => {

    const pseudo = sessionStorage.getItem('username');

    const [commentaire, commentaireSet] = useState('');
    const [commentaireData, commentaireDataSet] = useState([]);

    const [obligationPseudo, obligationPseudoSet] = useState('');

    const envoieCommentaireBrut = async () => {
        try {const commentaireEnvoie = await envoieCommentaire(commentaire, identifiant);recuperationCommentaireBrut(identifiant);console.log(commentaireEnvoie)} 
        catch (error) {console.error("Erreur lors de la récupération des données:", error);}
    }

    const recuperationCommentaireBrut = async (identifiant) => {
        try {const commentaireRecuperation = await recuperationCommentaire(identifiant);commentaireDataSet(commentaireRecuperation)} 
        catch (error) {console.error("Erreur lors de la récupération des données:", error);}
    }

    const obligationConnexion = () => {
        if (pseudo === '' || pseudo === null || pseudo === undefined) {
            obligationPseudoSet('Vous devez avoir un compte pour poster un commentaire.');
        } else {
            obligationPseudoSet('');
        }
    }

    useEffect(() => {
        recuperationCommentaireBrut(identifiant);
    }, [identifiant]);
    return (
        <div className='commentaireConteneur'>
            <div className="secondConteneur">
                <div className="centre">
                    <p>Poster un commentaire</p>
                    <textarea value={commentaire} onClick={() => {obligationConnexion()}} onChange={(event) => {commentaireSet(event.target.value)}} placeholder='Ecrivez un commentaire...' name="" id="" cols="" rows=""></textarea>
                    {obligationPseudo !== '' ? (
                        <div className='obligationPseudo'>
                            <p>{obligationPseudo}</p>
                            <Bouton label="J'ai compris" onClick={() => {obligationPseudoSet('')}}/>
                            <Link className='onglet login' to="/login">Je me connecte</Link>
                        </div>
                    ) : null}
                    <div className="poster">
                        <Bouton label="Poster le commentaire" onClick={() => {envoieCommentaireBrut()}}/>
                    </div>
                </div>
                <div className="centre2">
                    {Array.isArray(commentaireData) && commentaireData.map((entry) => (
                        <div className='carteCommentaire'>
                            <div className="haut">
                                <p className='pseudo'>{entry.pseudo}</p>
                                <p className='date'>{entry.date}</p>
                            </div>
                            <div className="commentaireZone">
                                <p className='commentaire'>{entry.commentaire}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Commentaire