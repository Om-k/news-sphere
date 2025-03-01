import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetFilters } from "../hooks/useGetFilters";
import { RootState } from "../app/store";
import SearchInput from "../components/ui/SearchInput";
import Button from "../components/ui/Button";
import { handleFilterSelect, handleSearchChange, resetPreferences } from "../utils/helpers/persnalizationHelpers";
import PHeader from "../components/custom/personalisation/Pheader";
import SelectedFilters from "../components/custom/personalisation/SelectedFilters";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";
import DateCompoent, { DateRange } from "../components/custom/personalisation/DateCompoent";
import { updateSearchPreference } from "../app/features/preferenceSlice";

export type FilterData = {
  category: string[] | undefined;
  source: string[] | undefined;
  authors: string[] | undefined;
};

const SearchFilter: React.FC = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isLoaded } = useGetFilters();
  const { filters } = useSelector((state: RootState) => state.filters);
  const { searchPreference } = useSelector((state: RootState) => state.preference);
  
  const categories = ["category", "source"]

  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get("q");

  const [activeSection, setActiveSection] = useState<string>("category");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<FilterData>({
    category: [],
    source: [],
    authors: [],
  });

  useEffect(() => {
    if (isLoaded) {
      resetPreferences(setFilteredData, filters);
    }
  }, [filters, isLoaded]);

  if (isLoading) {
    return <div className="text-center text-secondaryDarker">Loading filters...</div>;
  }

  const handleDateApply = (dateRange: DateRange) => {
    console.log("Date",dateRange);
    dispatch(updateSearchPreference({...searchPreference,
      date:{
        from: dateRange.from,
        to: dateRange.to
      }
    }))
  };

  return (
    <section className="p-6 pt-0 bg-primary text-secondaryDarker rounded-lg shadow-md -mt-2">
      <div className="flex justify-between mb-4 items-center" >
        <Button
          variant="iconed"
          icon={<BsArrowLeft />}
          onClick={() => {navigator(`/search?q=${paramValue!=null ? paramValue : ""}`)}}
        ></Button>
        <h2>Filter</h2>
        <div></div>
      </div>
      <DateCompoent onApply={handleDateApply} />
      <PHeader
        categories={categories}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        dispatch={dispatch}
        isFeed={false}
      />

      {activeSection && (
        <div className="bg-secondaryLight p-4 rounded-md border border-secondary mb-4">
          <SelectedFilters
            activeSection={activeSection}
            feedPreference={{...searchPreference,authors:[]}}
            dispatch={dispatch}
            isFeed={false}
          />
          <SearchInput
            placeholder={`Search ${activeSection}`}
            onInputChange={handleSearchChange({
              searchQuery,
              setSearchQuery,
              activeSection: activeSection as keyof FilterData,
              setFilteredData,
              filters,
            })}
            onSubmit={() => { }}
          />

          <div className="mt-4 grid grid-cols-2 gap-2">
            {filteredData[activeSection as keyof FilterData]?.map((item: string, index: number) => (
              <Button
                variant="text"
                key={index}
                onClick={() => handleFilterSelect(activeSection as keyof FilterData, item, {...searchPreference,authors:[]}, dispatch,false)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchFilter;
