import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const NewsFeedSearch = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get("q"); 
    console.log("Query",query);

    useEffect(() => {
        if (!query || query.trim() === "") {
          navigate("/");
        }
      }, [query, navigate]);

    return <section>NewsFeedSearch</section>
}

export default NewsFeedSearch