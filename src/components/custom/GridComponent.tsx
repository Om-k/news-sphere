import { INewsItem } from "../../types/News";
import NewsCard from "./NewsCard";

const GridComponent = ({ newsData }: { newsData: INewsItem[] }) => {

    return <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {newsData.map((item,index) => (
            <NewsCard {...item} key={index + item.url} />
        ))}
    </div>
}

export default GridComponent