import axios from 'axios';

const apiUrlLocal = 'http://localhost:1234';

export const envoieCommentaire = async (commentaire, identifiant) => {

  const pseudo = sessionStorage.getItem('username');

  if (commentaire !== '' && commentaire !== undefined && commentaire !== null) {
    if (identifiant !== '' && identifiant !== undefined && identifiant !== null) {
      try {
        const response = await axios.post(`${apiUrlLocal}/envoieCommentaire?pseudo=${pseudo}&commentaire=${commentaire}&identifiant=${identifiant}`);
        console.log(response);

        return;
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        throw error;
      }
    }
  }
};

export const recuperationCommentaire = async (identifiant) => {
  
  if (identifiant !== '' && identifiant !== undefined && identifiant !== null) {
    try {
      const response = await axios.get(`${apiUrlLocal}/recuperationCommentaire?identifiant=${identifiant}`);

      const tableau = [];
      const dataArray = Array.isArray(response.data) ? response.data : [response.data];
      const autre = dataArray[0].data;
  
      autre.forEach(item => {
          const extractedData = {};
          Object.entries(item).forEach(([key, value]) => {
            extractedData[key] = value;
          });
          tableau.push(extractedData);
      });
  
      console.log(tableau);
      return tableau;
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
      throw error;
    }
  }
};