import axios from 'axios';

const apiUrlLocal = 'https://bizeterieapi-l0al.onrender.com';

export const recuperationMusiqueLien = async (identifiant) => {
    console.log('identifiant API : ', identifiant);
    try {
      const response = await axios.get(`${apiUrlLocal}/recuperationMusiqueLien?identifiant=${identifiant}`);
  
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
};  

export const recuperationMusiqueInfo = async (identifiant) => {
    console.log(identifiant);
    try {
      const response = await axios.get(`${apiUrlLocal}/recuperationMusiqueInfo?identifiant=${identifiant}`);
  
      
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
};

export const envoieLike = async (like, identifiant) => {
  try {
    const data = { like: like, identifiant: identifiant };
    const response = await axios.post(`${apiUrlLocal}/like`, data);
    console.log(response);
    return;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    throw error;
  }
};