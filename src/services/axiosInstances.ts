import axios from 'axios';

// export const guardianAPI = axios.create({
//   baseURL: 'https://content.guardianapis.com',
//   headers: {
//     'Content-Type': 'application/json',
//     'api-key': '74ae75ef-c662-4382-ae4e-da5b43782890',
//   },
// });

export const nytAPI = axios.create({
  baseURL: 'baseURL: "/guardian-api"',
  params: {
    'api-key': 'Z6uSuFQvA4LHAB3xT940FpcLO2JnigLm',
  },
});

export const newsAPI = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Authorization': 'Bearer df97de98cd6b41619e490ea161a18cbe',
  },
});
