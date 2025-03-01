import React from "react";
import { Dispatch } from "react";
import { CgClose } from "react-icons/cg";
import Button from "../../ui/Button";
import { IPreferenceFeed } from "../../../types/Filters";
import { handleFilterRemove, handleFilterRemoveSearch } from "../../../utils/helpers/persnalizationHelpers";
import { FilterData } from "../../../containers/Personalize";

type SelectedFiltersProps = {
  activeSection: string;
  feedPreference: IPreferenceFeed;
  dispatch: Dispatch<any>;
  isFeed: boolean
};

const SelectedFilters: React.FC<SelectedFiltersProps> = ({
  activeSection,
  feedPreference,
  dispatch,
  isFeed
}) => {
  return (
    <div className="mb-4">
      {feedPreference[activeSection as keyof FilterData]?.map((filter: string, index: number) => (
        <Button
          variant="text"
          key={index}
          className="inline-flex items-center px-3 py-1 mr-2 mb-2 bg-primary text-secondaryDarker rounded-md"
        >
          {filter}
          <CgClose
            className="ml-2 w-4 h-4 cursor-pointer"
            onClick={() => {
              // if(isFeed)               {
              handleFilterRemove(activeSection as keyof FilterData, filter, feedPreference, dispatch,isFeed)

              // }
              // else{
              //   handleFilterRemoveSearch(activeSection as keyof FilterData, filter, feedPreference, dispatch)
              // }
            }}
          />
        </Button>
      ))}
    </div>
  );
};

export default SelectedFilters;
