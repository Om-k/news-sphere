import { useSelector } from "react-redux";
import useGetNews from "../hooks/useGetNews";
import GridComponent from "../components/custom/GridComponent";
import TopPanelMain from "../components/custom/TopPanelMain";
import { RootState } from "../app/store";

const NewsFeed = () => {
  const preferences = useSelector((state: RootState) => state);

  console.log("Cure preff",preferences);
  

  const { newsData, isLoading, error } = useGetNews(preferences.preference.feedPreference, "");

  return (
    <section className="mx-14" >
      <TopPanelMain/>
      {error && <p className="text-center text-red-500">{error}</p>}
      <GridComponent newsData={newsData} />
      {isLoading && <p className="text-center">Loading...</p>}
    </section>
  );
};

export default NewsFeed;
