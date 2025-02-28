import { getNewsData } from "../services/getDataServices";
import { getNewsApiData } from "../services/newsApiServices";
// import { getNewYorkTimesData } from "../services/newYorkTimesServices";
import { objectToParameter } from "../utils/objectToPrameter"

const Navbar = () => {
    return <section>
        <h1>NewsSphere</h1>
        <button onClick={async () => {
            console.log(objectToParameter({
                isApplied: true,
                category: ['Technology', 'Science'],
                source: ['bbc-news', 'the-verge'],
                authors: ['John Doe', 'Jane Smith'],
                date: {
                  from: '2023-01-01',
                  to: '2023-12-31',
                },
              }));
              const param = {
                isApplied: true,
                category: ['Arts', 'Science'],
                source: ['bbc-news', 'the-verge'],
                authors: ["Adam Rasgon", "Julia Jacobs"], 
                date: {
                  from: '2025-02-26',
                  to: '2025-02-28',
                },
              }

              const paramNA = {
                isApplied: true,
                category: ["technology"],
                source: ['bbc-news', 'the-verge'],
                authors: ["Adam Rasgon", "Julia Jacobs"], 
                date: {
                  from: '2025-02-26',
                  to: '2025-02-28',
                },
              }

              console.log("Curr params",param);
              
              const data = await getNewsData(param  ,"",1)
              console.log("Curr data",data);
              
       }} >click</button>
        </section>
}

export default Navbar
