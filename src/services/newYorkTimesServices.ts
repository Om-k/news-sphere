import { INewsItem, INewsItemNewYorkTimes } from "../types/News";
import { newYorkTimesAPI } from "./axiosInstances";
import placeholder from "../assets/placeholder.webp";
import { convertDate } from "../utils/dateConversion";
import { newYorkTimesBaseUrl } from "../constants/newYorkTimesConstants";

export const getNewYorkTimesData = async (
  params: string,
  pageNo: number,
  query?: string,
  otherParams?: string
): Promise<INewsItem[]> => {
  try {
    const response = await newYorkTimesAPI.get(
      `?q=${query ? query : "news"}&page=${pageNo}&sort=newest&${params}${
        otherParams && `&${otherParams}`
      }`
    );
    const nytRes: INewsItemNewYorkTimes[] = response.data.response.docs;

    const transformedData: INewsItem[] = nytRes.map((item) => ({
      thumbnail: item.multimedia?.[0]?.url
        ? `${newYorkTimesBaseUrl}/${item.multimedia[0].url}`
        : placeholder,
      title: item.headline.main,
      source: item.source,
      date: convertDate(item.pub_date), // Format to YYYY-MM-DD
      url: item.web_url,
      author: item.byline?.original || "Unknown",
    }));

    return transformedData;
  } catch (error) {
    console.error("Error fetching New York Times data: ", error);
    throw new Error("Failed to fetch New York Times data.");
  }
};

