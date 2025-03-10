import { IPreferences } from "../types/Filters";

const objectToParameter = (
  preferences: IPreferences
): {
  nyTimesParams: string;
  newsApiParamsSources: string;
  newsApiParamsCategories: string;
  guardianParams: string;
} => {
  const { isApplied, category, source, authors, date } = preferences;

  if (!isApplied) {
    return {
      nyTimesParams: "",
      newsApiParamsSources: "",
      newsApiParamsCategories: "",
      guardianParams: "",
    };
  }

  const nyParams: string[] = [];
  const fqFilters: string[] = [];
  const newsApiParamsSources: string[] = [];
  const newsApiParamsCategories: string[] = [];
  const guardianParams: string[] = [];

  if (category && category.length > 0) {
    fqFilters.push(`section_name:(${category.map((c) => `"${c}"`).join(" ")})`);
    newsApiParamsCategories.push(`category=${category.join(",")}`);
    guardianParams.push(`section=${category.join("|")}`);
  }

  if (source && source.length > 0) {
    newsApiParamsSources.push(`sources=${source.join(",")}`);
  }

  if (authors && authors.length > 0) {
    fqFilters.push(`byline:(${authors.map((a) => `"${a}"`).join(" ")})`);
    guardianParams.push(`q=${authors.join(" ")}`);
  }

  if (fqFilters.length > 0) {
    nyParams.push(`fq=${fqFilters.join(" AND ")}`);
  }

  if (date?.from) {
    nyParams.push(`begin_date=${date.from.replace(/-/g, "")}`);
    newsApiParamsSources.push(`from=${date.from}`);
    newsApiParamsCategories.push(`from=${date.from}`);
    guardianParams.push(`from-date=${date.from}`);
  }

  if (date?.to) {
    nyParams.push(`end_date=${date.to.replace(/-/g, "")}`);
    newsApiParamsSources.push(`to=${date.to}`);
    newsApiParamsCategories.push(`to=${date.to}`);
    guardianParams.push(`to-date=${date.to}`);
  }

  return {
    nyTimesParams: nyParams.join("&"),
    newsApiParamsSources: newsApiParamsSources.join("&"),
    newsApiParamsCategories: newsApiParamsCategories.join("&"),
    guardianParams: guardianParams.join("&"),
  };
};

export { objectToParameter };
