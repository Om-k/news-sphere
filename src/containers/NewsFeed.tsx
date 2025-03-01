import { useSelector } from "react-redux";
import useGetNews from "../hooks/useGetNews";
import GridComponent from "../components/custom/GridComponent";
import TopPanelMain from "../components/custom/TopPanelMain";
import { RootState } from "../app/store";
import Loader from "../components/custom/Loader";

const NewsFeed = () => {
  const preferences = useSelector((state: RootState) => state);

  const { newsData, isLoading, error } = useGetNews(preferences.preference.feedPreference, "");

  return (
    <section className="md:mx-14 mx-6" >
      <TopPanelMain/>
      {error && <p className="text-center text-red-500">{error}</p>}
      <GridComponent newsData={newsData} />
      {isLoading && <Loader/>}
    </section>
  );
};

export default NewsFeed;
