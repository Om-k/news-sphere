import axios from 'axios';

export const guardianAPI = axios.create({
  baseURL: '/api', 
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    'api-key': import.meta.env.VITE_API_KEY_GAURDIAN_API,
  },
});

export const newYorkTimesAPI = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  params: {
    'api-key': import.meta.env.VITE_API_KEY_NYT_API,
  },
});

export const newsAPI = axios.create({
  baseURL: '/newsApi',
  params: {
    'apiKey': import.meta.env.VITE_API_KEY_NEWS_API,
  },
});
