import { INewsItem } from "../../types/News";

export const NewsCard = ({ thumbnail, title, url, date, source }: INewsItem) => {

  return (
    <div className="border border-secondary rounded-lg overflow-hidden">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="h-full flex flex-col">
          {/* Image Section */}
          <div className="h-56">
            <img
              src={thumbnail}
              alt={`${title} image`}
              className="object-cover h-full w-full"
            />
          </div>
          {/* Text Section */}
          <div className="p-4 bg-primary flex flex-col flex-grow">
            <div className="flex justify-between text-sm text-secondaryDark mb-2">
              <p>{source}</p>
              <p>{date}</p>
            </div>
            <h3 className="text-lg font-semibold line-clamp-3">{title}</h3>
            {/* {author && <p className="text-sm text-gray-700 mt-2">By {author}</p>} */}
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
