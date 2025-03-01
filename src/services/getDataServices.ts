import { IPreferences } from "../types/Filters";
import { INewsItem } from "../types/News";
import { objectToParameter } from "../utils/objectToPrameter";
import { getCominedNewApiData } from "./newsApiServices";
import { getNewYorkTimesData } from "./newYorkTimesServices";
import { getGuardianData } from "./guardianApiServices";

const shouldFetch = (param: IPreferences, key: Exclude<keyof IPreferences, "isApplied" | "date">): boolean => {
  return !param.isApplied || param[key]?.length === 0;
};

export const getNewsData = async (
  param: IPreferences,
  query: string,
  pageNo: number
): Promise<INewsItem[]> => {
  try {
    const queries = objectToParameter(param);
    

    //These checkings are done as the apis don't provide end point for tose filters 
    const newYorkTimesData = shouldFetch(param, "source")
      ? await getNewYorkTimesData(queries.nyTimesParams, pageNo - 1, query)
      : [];

    const newsApiData = shouldFetch(param, "authors")
      ? await getCominedNewApiData(
          pageNo,
          query,
          queries.newsApiParamsSources,
          queries.newsApiParamsCategories
        )
      : [];

    const guardianData = shouldFetch(param, "authors")
      ? await getGuardianData(queries.guardianParams, pageNo, query)
      : [];

    return [...newsApiData, ...newYorkTimesData, ...guardianData];
  } catch (error) {
    console.error("Error fetching news data: ", error);
    throw new Error("Failed to fetch news data.");
  }
};
