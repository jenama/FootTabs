// utils/api.ts

import axios from 'axios';
require('dotenv').config({ path: '.env.local' });

const apiClient = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
    headers: {
      'x-apisports-key': process.env.NEXT_PUBLIC_API_KEY,
    },
  })


// var config = {
//     method: 'get',
//     url: 'https://v3.football.api-sports.io/players',
//     headers: {
//       'x-rapidapi-key': '855e56858f67858b3c7ea71204411c06',
//       'x-rapidapi-host': 'v3.football.api-sports.io'
//     }
//   };
  
//   axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   export default config;

// require('dotenv').config({ path: '.env.local' });

// const apiKey = process.env.API_KEY;

// const apiClient = axios.create({
//   baseURL: 'https://v3.football.api-sports.io/players',
//   headers: {
//     'Authorization': `Bearer ${apiKey}`,
//   },
// });

export default apiClient;






// const apiKey = process.env.API_KEY;
// console.log(apiKey);
