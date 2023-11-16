import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './registerTerminal.css';

import Input from '../../components/input/Input';
import Bouton from '../../components/bouton/Bouton';
import NavBar from '../../components/navBar/NavBar';

const RegisterTerminal = () => {



  // ============================= DECLARATION VARIABLE ============================= //



  const navigate = useNavigate();
  const [statusConnexion, statusConnexionSet] = useState('');

  const [pseudoValue, pseudoValueSet] = useState('');
  const [emailValue, emailValueSet] = useState('');
  const [passwordValue, passwordValueSet] = useState('');

  const apiUrlLocal = 'https://bizeterieapi.onrender.com';



  // ============================= REQUETE CONNEXION ============================= //



  const verificationDonnee = async (e) => {
    e.preventDefault();

    if (pseudoValue === '' || pseudoValue === null) {
      statusConnexionSet('Tous les champs sont requis');
      if (emailValue === '' || emailValue === null) {
        statusConnexionSet('Tous les champs sont requis');
        if (passwordValue === '' || passwordValue === null) {
          statusConnexionSet('Tous les champs sont requis');
        }
      }
    } else {
      try {
        console.log("ererer");
        const response = await axios.post(`${apiUrlLocal}/signup`, {pseudo: pseudoValue, email: emailValue, password: passwordValue});

        console.log(response.data.message);
        navigate("/login");

      } catch (error) {
        console.log('Error:', error);
        //setError('Erreur de connexion. Veuillez vérifier vos informations.');
      }
    };
  }

  return (
    <div className='registerTerminalConteneur'>
      <NavBar />
      <div className="loginSection">
        <div className="inputSection">
          <h3>S'inscrire</h3>
          <div className="haut">
            <Input className='pseudo' type="text" placeholder={'Entrez votre pseudonyme'} value={pseudoValue} onChange={(event) => {pseudoValueSet(event.target.value)}}/>
            <Input className='email' type="text" placeholder={'Entrez votre adresse Email'} value={emailValue} onChange={(event) => {emailValueSet(event.target.value)}}/>
            <div className="passwordSection">
              <div className='passwordSection'>
                <input className='password' type="password" placeholder='Entrez votre mot de passe ' value={passwordValue} onChange={(event) => {passwordValueSet(event.target.value)}}/>
              </div>
            </div>
            {statusConnexion !== '' ? (
              <p className='erreur'>{statusConnexion}</p>
            ) : null }
          </div>
          <div className="bas">
            <Link className='pasDeCompte' to="/login">J'ai deja un compte</Link>
            <Bouton className='connexion' label="S'inscrire" onClick={verificationDonnee}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterTerminal