import { useSelector } from "react-redux";
import useGetNews from "../hooks/useGetNews";
import { IPreferenceState } from "../types/States";
import GridComponent from "../components/custom/GridComponent";
import useQueryParam from "../hooks/useParamsSearch";

const NewsFeedSearch = () => {

  const preferences = useSelector((state: IPreferenceState) => state.searchPreference);

  const query = useQueryParam("q");
  const { newsData, isLoading, error } = useGetNews(preferences, query ? query : "");


  return (
    <section className="mx-14" >
      {error && <p className="text-center text-red-500">{error}</p>}
      <GridComponent newsData={newsData} />
      {isLoading && <p className="text-center">Loading...</p>}
    </section>
  );
}

export default NewsFeedSearch