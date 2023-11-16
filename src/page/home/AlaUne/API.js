import axios from 'axios';

const apiUrlLocal = 'http://localhost:1234';

export const recuperationMusiqueAlaUne = async () => {
  try {
    const response = await axios.get(`${apiUrlLocal}/recuperationMusiqueAlaUne`);

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

    return tableau;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    throw error;
  }
};