export interface INewsItem {
  thumbnail: string;
  title: string;
  source?: string;
  date: string;
  url: string;
  author:string;
}

export interface INewsItemNewYorkTimes {
  headline: { //title
    main:string
  }
  web_url: string; //url
  multimedia : [{url:string}] //thumbnail [0]
 source: string; //source
 pub_date: string; //date  eg2025-01-14T16:45:13+0000
 byline : {
  original: string
 } //authors
}

export interface INewsItemNewsAPi {
  content: string; //title
  url: string; //url
  urlToImage: string //thumbnail
  source: {
    id:string,
    name:string
  } //source
  publishedAt: string //date  eg:2025-02-27T12:06:00Z
 author:string //author
}


