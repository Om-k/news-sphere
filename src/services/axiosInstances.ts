import axios from 'axios';

// export const guardianAPI = axios.create({
//   baseURL: 'https://content.guardianapis.com',
//   headers: {
//     'Content-Type': 'application/json',
//     'api-key': '74ae75ef-c662-4382-ae4e-da5b43782890',
//   },
// });

export const newYorkTimesAPI = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  params: {
    'api-key': 'Z6uSuFQvA4LHAB3xT940FpcLO2JnigLm',
  },
});

export const newsAPI = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Authorization': 'Bearer 2b03684c86b942b3ba6dac1522989334',
  },
});
