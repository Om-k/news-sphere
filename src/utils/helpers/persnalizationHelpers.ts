import { FilterData } from "../../containers/Personalize";
import { IPreferenceFeed } from "../../types/Filters";
import { updateFeedPreference } from "../../app/features/preferenceSlice"; 
import { ICategories } from "../../types/Categories";
  import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleFilterSelect = (
  section: keyof FilterData,
  filter: string,
  feedPreference : IPreferenceFeed,
  dispatch: (arg0: any) => void,
  
) => {
  if (!feedPreference[section]?.includes(filter)) {
    const updatedPreference = {
      ...feedPreference,
      [section]: [...(feedPreference[section] ?? []), filter],
      isApplied: true,
    };
    dispatch(updateFeedPreference(updatedPreference));
  }
};

export const handleFilterRemove = (
  section: keyof FilterData,
  filter: string,
  feedPreference : IPreferenceFeed,
  dispatch: (arg0: any) => void
) => {
  const updatedPreference = {
    ...feedPreference,
    [section]: feedPreference[section]?.filter((item: string) => item !== filter) ?? [],
    isApplied: true,
  };
  dispatch(updateFeedPreference(updatedPreference));
};


export const resetPreferences = (setFilteredData: ((arg0: FilterData) => void),filters:ICategories) => {
    setFilteredData({
      category: filters.category,
      source: filters.source,
      authors: filters.authors,
    });
  };




// Define the function
interface HandleSearchChangeProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  activeSection: keyof FilterData;
  setFilteredData: Dispatch<SetStateAction<FilterData>>;
  filters: ICategories;
}

export const handleSearchChange = ({
  searchQuery,
  setSearchQuery,
  activeSection,
  setFilteredData,
  filters,
}: HandleSearchChangeProps) => {
  return (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);

    if (!newQuery) {
      resetPreferences(setFilteredData, filters);
      return;
    }

    if (activeSection) {
      setFilteredData((prev) => ({
        ...prev,
        [activeSection]: filters[activeSection]?.filter((item: string) =>
          item.toLowerCase().includes(newQuery.toLowerCase())
        ),
      }));
    }
  };
};