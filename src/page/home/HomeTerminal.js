import React, { useState, useEffect } from 'react';

import './homeTerminal.css';

const HomeTerminal = () => {


  //==================== CREATION PSEUDO DE BASE ====================//


  let insulteTableau = ['FilsDeViole', 'EnfantDePutain', 'Pédé', 'Pute', 'ClébardPuant', 'FilsDePute'];

  function obtenirInsulteAleatoire() {
    const indiceAleatoire = Math.floor(Math.random() * insulteTableau.length);
  
    const insulteAleatoire = insulteTableau[indiceAleatoire];
  
    return insulteAleatoire;
  }
  
  const insulte = obtenirInsulteAleatoire();

  const nombre = Math.floor(Math.random() * 100);
  
  console.log(insulte);


  //==================== ====================//


  const [message, setMessage] = useState('');
  const [pseudo, setPseudo] = useState(`${insulte + 'N°' + nombre}`);
  const [messages, setMessages] = useState([]);

  
  //==================== ENVOIE MESSAGE ====================//


  const sendMessage = async () => {
    setMessage('');
    try {
      const response = await fetch('http://localhost:1234/insertionMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pseudo, message }),
      });

      const data = await response.json();
      console.log(data);
      recupererMessages();
    } catch (error) {
      console.error('Error:', error);
    }
  };


  //==================== RECUPERATION MESSAGE ====================//


  const recupererMessages = async () => {
    try {
      const response = await fetch('http://localhost:1234/recuperationMessage');
      const data = await response.json();
      if (data.success) {
        setMessages(data.messages);
      } else {
        console.error('Erreur lors de la récupération des messages:', data.error);
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(recupererMessages, 1000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className='homeTerminalConteneur'>
      <div className="haut">
      <div className='listeMessage'>
        {messages.map((message, index) => (
          <div className="message">
            <div className="messageHaut">
              <p className='pseudo'>{message.pseudo}</p>
              <p className='date'>{message.date}</p>
            </div>
            <div className="messageBas">
              <p>{message.message}</p>
            </div>
          </div>
        ))}
    </div>
      </div>
      <div className="bas">
        <div className='listeInput'>
          <p>Ton Pseudonche</p>
          <input
            className='pseudoInput'
            type='text'
            placeholder='Ton pseudo ?'
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
          <p>Ton message</p>
          <textarea
            className='messageInput'
            type='text'
            placeholder='Ecris un message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeTerminal;
