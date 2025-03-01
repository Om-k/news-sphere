import { useSelector } from "react-redux";
import useGetNews from "../hooks/useGetNews";
import GridComponent from "../components/custom/GridComponent";
import useQueryParam from "../hooks/useParamsSearch";
import { RootState } from "../app/store";

const NewsFeedSearch = () => {

  const { searchPreference } = useSelector((state: RootState) => state.preference);

  const query = useQueryParam("q");
  console.log("Feed pref serach",searchPreference);

  const { newsData, isLoading, error } = useGetNews(searchPreference, query ? query : "");


  return (
    <section className="mx-14" >
      {error && <p className="text-center text-red-500">{error}</p>}
      <GridComponent newsData={newsData} />
      {isLoading && <p className="text-center">Loading...</p>}
    </section>
  );
}

export default NewsFeedSearch