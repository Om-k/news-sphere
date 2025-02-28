import { objectToParameter } from "../utils/objectToPrameter"

const Navbar = () => {
    return <section>
        <h1>NewsSphere</h1>
        <button onClick={() => {
            console.log(objectToParameter({
                isApplied: true,
                category: ['Technology', 'Science'],
                source: ['bbc-news', 'the-verge'],
                authors: ['John Doe', 'Jane Smith'],
                date: {
                  from: '2025-01-28',
                  to: '2025-01-28',
                },
              }))
        }} >click</button>
        </section>
}

export default Navbar

//"category=Technology,Science&sources=bbc-news,the-verge&authors=John%20Doe,Jane%20Smith&from=2025-01-28&to=2025-01-28"
//"fq=section_name%3A(%22Technology%22%20%22Science%22)%20AND%20source%3A(%22bbc-news%22%20%22the-verge%22)%20AND%20byline%3A(%22John%20Doe%22%20%22Jane%20Smith%22)&begin_date=20250128&end_date=20250128