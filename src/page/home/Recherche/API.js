import axios from 'axios';

//https://bizeterieapi.onrender.com
// http://localhost:1234
const apiUrlLocal = 'https://bizeterieapi.onrender.com';

export const recuperationMusiqueRecherche = async (recherche, emotion) => {
  
  try {
    let response;
    if (recherche == '') {
      if (emotion == '') {
        response = await axios.get(`${apiUrlLocal}/recuperationMusiqueRecherche`);
      } else {
        response = await axios.get(`${apiUrlLocal}/recuperationMusiqueRecherche?emotion=${emotion}`);
      }
    } else {
      if (emotion == '') {
        response = await axios.get(`${apiUrlLocal}/recuperationMusiqueRecherche?recherche=${recherche}`);
      } else {
        response = await axios.get(`${apiUrlLocal}/recuperationMusiqueRecherche?recherche=${recherche}&emotion=${emotion}`);
      }
    }

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
    console.log(tableau[0].tag);

    return tableau;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    throw error;
  }
};