import { useSelector } from "react-redux";
import useGetNews from "../hooks/useGetNews";
import GridComponent from "../components/custom/GridComponent";
import useQueryParam from "../hooks/useParamsSearch";
import { RootState } from "../app/store";
import Loader from "../components/custom/Loader";

const NewsFeedSearch = () => {

  const { searchPreference } = useSelector((state: RootState) => state.preference);

  const query = useQueryParam("q");
  

  const { newsData, isLoading, error } = useGetNews(searchPreference, query ? query : "");


  return (
    <section className="md:mx-14 mx-6" >
      {error && <p className="text-center text-red-500">{error}</p>}
      {newsData.length > 0 ?
        <GridComponent newsData={newsData} /> :
        <div className="w-full mt-5 flex justify-center items-center" >
           {!isLoading && !error && <h3>Please try adjsting the filters</h3>}
        </div>
      }

      {isLoading && <Loader />}
    </section>
  );
}

export default NewsFeedSearch