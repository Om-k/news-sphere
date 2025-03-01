import { Dispatch, SetStateAction } from "react";
import { resetFeedPreference, resetSearchPreference } from "../../../app/features/preferenceSlice";
import Button from "../../ui/Button";
import { BiTrash } from "react-icons/bi"; 

type PHeaderProps = {
  categories: string[];
  setActiveSection: Dispatch<SetStateAction<string>>;
  activeSection: string;
  dispatch: Dispatch<any>;
  isFeed :boolean ;
};

const PHeader: React.FC<PHeaderProps> = ({ categories, setActiveSection, activeSection, dispatch, isFeed }) => {
  return (
    <div className="flex justify-between flex-col lg:flex-row mb-5 lg:mb-0">
      <div className="flex space-x-4 mb-6">
        {categories.map((key) => (
          <Button
            key={key}
            variant="text"
            className={`px-4 py-2 rounded-md border border-secondary ${
              activeSection === key
                ? "bg-primary text-secondaryDark"
                : "bg-secondaryLight text-secondaryDarker"
            }`}
            onClick={() => setActiveSection(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Button>
        ))}
      </div>

      <Button
        variant="filled"
        icon={<BiTrash/>}
        onClick={() => {
          if(isFeed)
          { dispatch(resetFeedPreference({}));}
          else
         { dispatch(resetSearchPreference({}));}
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default PHeader;
