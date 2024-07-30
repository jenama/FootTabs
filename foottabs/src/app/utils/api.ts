// utils/api.ts

import axios from 'axios';
require('dotenv').config({ path: '.env.local' });

const apiClient = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
    headers: {
      'x-apisports-key': process.env.NEXT_PUBLIC_API_KEY,
    },
  })




export default apiClient;






// const apiKey = process.env.API_KEY;
// console.log(apiKey);
