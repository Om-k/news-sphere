import { useState, useEffect, useCallback } from "react";
import { IPreferences } from "../types/Filters";
import { INewsItem } from "../types/News";
import { getNewsData } from "../services/getDataServices";
import { isScrolledToBottom } from "../utils/scrollUtils";
import { debounce } from "../utils/debounce";

interface IGetNewsResult {
  newsData: INewsItem[];
  isLoading: boolean;
  error: string | null;
}

const useGetNews = (param: IPreferences, query: string): IGetNewsResult => {
  const [newsData, setNewsData] = useState<INewsItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pageNo, setPageNo] = useState<number>(1);

  const fetchNews = useCallback(
    async (page: number) => {
      setIsLoading(true);
      setError(null);

      try {
        const newData = await getNewsData(param, query, page);
        setNewsData((prevData) => [...prevData, ...newData]); 
      } catch (err) {
        console.error("Error fetching news: ", err);
        setError("Failed to fetch news data.");
      } finally {
        setIsLoading(false);
      }
    },
    [param, query]
  );

  useEffect(() => {
    fetchNews(pageNo);
  }, [fetchNews, pageNo]);

  const handleScroll = useCallback(() => {
    if (isScrolledToBottom() && !isLoading) {
      setPageNo((prevPage) => prevPage + 1); 
    }
  }, [isLoading]);

  useEffect(() => {
    const debouncedScrollHandler = debounce(handleScroll, 500);
    window.addEventListener("scroll", debouncedScrollHandler);
    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [handleScroll]);

  return {
    newsData,
    isLoading,
    error,
  };
};

export default useGetNews;
