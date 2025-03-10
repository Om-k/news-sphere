import { INewsItem, INewsItemNewsAPi, INewsSourceNewsAPi } from "../types/News";
import { newsAPI } from "./axiosInstances";
import placeholder from "../assets/placeholder.webp";
import { convertDate } from "../utils/dateConversion";
import { makeUniqueObjectsByKey } from "../utils/arrayUtils";

const transFormData = (newsApiRes: INewsItemNewsAPi[]): INewsItem[] => {
  const transformedData: INewsItem[] = newsApiRes.map((item) => ({
    thumbnail: item.urlToImage || placeholder,
    title: item.title,
    source: item.source.name,
    date: convertDate(item.publishedAt), // Format to YYYY-MM-DD
    url: item.url,
    author: item.author || "Unknown",
  }));

  return transformedData;
};

export const getNewsApiData = async (
  params: string,
  pageNo: number,
  query: string = "",
  otherParams: string = "",
  search?: boolean
): Promise<INewsItem[]> => {
  try {
    const queryString = [
      `${!search ? "top-headlines?" : "everything?"}`,
      `q=${query}`,
      `pageSize=10`,
      `page=${pageNo}`,
      `language=en`,
      params,
      otherParams,
    ]
      .filter(Boolean)
      .join("&");

    const response = await newsAPI.get(`${queryString}`);

    const newsApiRes: INewsItemNewsAPi[] = response.data.articles;

    // Transform response data
    const transformedData = transFormData(newsApiRes);

    return transformedData;
  } catch (error) {
    console.error("Error fetching NewsAPI data: ", error);
    return []
    // throw new Error("Failed to fetch NewsAPI data.");
  }
};

export const getCominedNewApiData = async (
  pageNo: number,
  query: string = "",
  newsApiParamsSources: string,
  newsApiParamsCategories: string,
  otherParams: string = ""
): Promise<INewsItem[]> => {
  let newsApiSources: INewsItem[] = [];
  let newsApiCategories: INewsItem[] = [];
  let newsApiSourcesSearch: INewsItem[] = [];

  //Three different calls as NewsAPI doesn't allow to call with both the filters
  if (
    (newsApiParamsCategories == "" && newsApiParamsSources == "") ||
    newsApiParamsSources.includes("sources")
  )
    newsApiSources = await getNewsApiData(
      newsApiParamsSources,
      pageNo,
      query,
      otherParams
    );

  if (newsApiParamsCategories.includes("category"))
    newsApiCategories = await getNewsApiData(
      newsApiParamsCategories,
      pageNo,
      query,
      otherParams
    );

  if (query !== "") {
    newsApiSourcesSearch = await getNewsApiData(
      newsApiParamsSources,
      pageNo,
      query,
      otherParams,
      true
    );
  }

  const newsApiData = makeUniqueObjectsByKey(
    [...newsApiSources, ...newsApiCategories, ...newsApiSourcesSearch],
    "title"
  );

  return newsApiData;
};

export const getNewsApiSources = async (): Promise<string[]> => {
  try {
    const response = await newsAPI.get(`/sources`);

    const sourceNames: string[] = response.data.sources.map(
      (source: INewsSourceNewsAPi) => source.name
    );

    return sourceNames;
  } catch (error) {
    console.error("Error fetching news sources:", error);
    return [];
  }
};
