import { useSelector } from "react-redux";
import useGetNews from "../hooks/useGetNews";
import { IPreferenceState } from "../types/States";
import GridComponent from "../components/custom/GridComponent";

const NewsFeed = () => {
  const preferences = useSelector((state: IPreferenceState) => state.feedPreference);

  const { newsData, isLoading, error } = useGetNews(preferences, "");

  return (
    <section className="mx-14" >
      {error && <p className="text-center text-red-500">{error}</p>}
      <GridComponent newsData={newsData} />
      {isLoading && <p className="text-center">Loading...</p>}
    </section>
  );
};

export default NewsFeed;
