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
  title: string; //title
  url: string; //url
  urlToImage: string //thumbnail
  source: {
    id:string,
    name:string
  } //source
  publishedAt: string //date  eg:2025-02-27T12:06:00Z
 author:string //author
}

export interface INewsSourceNewsAPi {
  name: string
}

export interface INewsItemGuardian {
  webTitle: string; // Title of the news article
  webUrl: string; // URL of the article
  fields?: {
    thumbnail?: string; // Thumbnail image URL (if available)
    byline?: string; // Author of the article (if available)
  };
  sectionName: string; // Section or category of the news
  webPublicationDate: string; // Publication date in ISO format (e.g., 2025-01-14T16:45:13+0000)
}


