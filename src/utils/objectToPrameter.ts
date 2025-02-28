import { IPreferences } from "../types/Filters";

const objectToParameter = (
  preferences: IPreferences
): { nyTimesParams: string; newsApiParams: string } => {
  const { isApplied, category, source, authors, date } = preferences;

  if (!isApplied) {
    return { nyTimesParams: "", newsApiParams: "" };
  }
  
  const nyParams: string[] = [];
  const fqFilters: string[] = [];

  const newsApiParams: string[] = [];

  if (category.length > 0) {
    fqFilters.push(`section_name:(${category.map((c) => `"${c}"`).join(" ")})`);
    newsApiParams.push(`category=${category.join(",")}`);
  }

  if (source.length > 0) {
    fqFilters.push(`source:(${source.map((s) => `"${s}"`).join(" ")})`);
    newsApiParams.push(`sources=${source.join(",")}`);
  }

  if (authors.length > 0) {
    fqFilters.push(`byline:(${authors.map((a) => `"${a}"`).join(" ")})`);
    newsApiParams.push(
      `authors=${authors.map((a) => encodeURIComponent(a)).join(",")}`
    );
  }

  if (fqFilters.length > 0) {
    nyParams.push(`fq=${encodeURIComponent(fqFilters.join(" AND "))}`);
  }

  if (date?.from) {
    nyParams.push(`begin_date=${date.from.replace(/-/g, "")}`);
    newsApiParams.push(`from=${date.from}`);
  }

  if (date?.to) {
    nyParams.push(`end_date=${date.to.replace(/-/g, "")}`);
    newsApiParams.push(`to=${date.to}`);
  }

  return {
    nyTimesParams: nyParams.join("&"),
    newsApiParams: newsApiParams.join("&"),
  };
};


export {objectToParameter}