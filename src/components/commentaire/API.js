import axios from 'axios';

const apiUrlLocal = 'http://localhost:1234';
const pseudo = sessionStorage.getItem('pseudo');

export const envoieCommentaire = async (commentaire, identifiant) => {
  try {
    const response = await axios.post(`${apiUrlLocal}/envoieCommentaire?pseudo=${pseudo}&commentaire=${commentaire}&identifiant=${identifiant}`);
    console.log(response);

    return;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    throw error;
  }
};