import axios from 'axios';

export const guardianAPI = axios.create({
    baseURL: '/api', 
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      'api-key': '74ae75ef-c662-4382-ae4e-da5b43782890',
    },
  });

export const newYorkTimesAPI = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  params: {
    'api-key': 'yLLbjfshrH5UGOsJQA8ZGxyLG6Rg5YC7',
  },
});

export const newsAPI = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Authorization': 'Bearer df97de98cd6b41619e490ea161a18cbe',
  },
});
