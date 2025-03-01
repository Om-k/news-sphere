import { guardianAPI } from "./axiosInstances";
import placeholder from "../assets/placeholder.webp";
import { convertDate } from "../utils/dateConversion";
import { INewsItem, INewsItemGuardian } from "../types/News";

export const getGuardianData = async (
  params: string,
  pageNo: number,
  query?: string,
  otherParams?: string
): Promise<INewsItem[]> => {
  try {
    const response = await guardianAPI.get(
      `/search?q=${
        query ? query : "news"
      }&page=${pageNo}&page-size=10&${params}${
        otherParams ? `&${otherParams}` : ""
      }&order-by=newest&show-fields=thumbnail`
    );

    const guardianRes: INewsItemGuardian[] = response.data.response.results;

    const transformedData: INewsItem[] = guardianRes.map((item: any) => ({
      thumbnail: item.fields?.thumbnail || placeholder,
      title: item.webTitle,
      source: "The Guardian",
      date: convertDate(item.webPublicationDate), // Format to YYYY-MM-DD
      url: item.webUrl,
      author: item.fields?.byline || "Unknown",
    }));
    
    return transformedData;
  } catch (error) {
    console.error("Error fetching Guardian data: ", error);
    throw new Error("Failed to fetch Guardian data.");
  }
};

export const getGuardianSections = async (): Promise<string[]> => {
  try {
    const response = await guardianAPI.get(`/sections`);
    const sections = response.data.response.results;

    return sections.map((section: any) => section.id);
  } catch (error) {
    console.error("Error fetching Guardian sections: ", error);
    throw new Error("Failed to fetch Guardian sections.");
  }
};
