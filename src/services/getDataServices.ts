import { IPreferences } from "../types/Filters";
import { INewsItem } from "../types/News";
import { objectToParameter } from "../utils/objectToPrameter";
import { getCominedNewApiData } from "./newsApiServices";
import { getNewYorkTimesData } from "./newYorkTimesServices";

export const getNewsData = async (
  param: IPreferences,
  query: string,
  pageNo: number
): Promise<INewsItem[]> => {
  try {
    const queries = objectToParameter(param);

    const newYorkTimesData = await getNewYorkTimesData(
      queries.nyTimesParams,
      pageNo - 1,
      query
    );

    const newsApiData = await getCominedNewApiData(
      pageNo,
      query,
      queries.newsApiParamsSources,
      queries.newsApiParamsCategories
    );

    return [...newsApiData, ...newYorkTimesData];
  } catch (error) {
    console.error("Error fetching news data: ", error);
    throw new Error("Failed to fetch news data.");
  }
};
