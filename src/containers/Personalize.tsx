import React, { useState, ChangeEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetFilters } from "../hooks/useGetFilters";
import { RootState } from "../app/store";
import SearchInput from "../components/ui/searchInput";
import { CgClose } from "react-icons/cg";
import { updateFeedPreference } from "../app/features/preferenceSlice";
import Button from "../components/ui/Button";

type FilterData = {
  category: string[] | undefined;
  source: string[] | undefined;
  authors: string[] | undefined;
};

type SelectedFilters = {
  category: string[];
  source: string[];
  authors: string[];
};

const Personalize: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, isLoaded } = useGetFilters();
  const { filters } = useSelector((state: RootState) => state.filters);
  const { feedPreference,searchPreference } = useSelector((state: RootState) => state.preference);
  const [activeSection, setActiveSection] = useState<string>("category");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<FilterData>({
    category: [],
    source: [],
    authors: [],
  });
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: [],
    source: [],
    authors: [],
  });

  useEffect(() => {
    if (isLoaded) {
        resetPrefrences()
    }
  }, [filters, isLoaded,]);

  const resetPrefrences = () => {
    setFilteredData({
        category: filters.category,
        source: filters.source,
        authors: filters.authors,
      });
  } 

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if(searchQuery == ""){
        resetPrefrences();
        return
    }
    if (activeSection) {
        setFilteredData((prev) => ({
          ...prev,
          [activeSection]: filters[activeSection as keyof FilterData]?.filter((item: string) =>
            item.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }));
      }
  };

  useEffect(() => {
    setSelectedFilters({
        category: feedPreference.category ?? [],
        authors: feedPreference.authors ?? [],
        source: feedPreference.source ?? [],
    })
  },[])

  useEffect(() => {
    console.log("Active",selectedFilters[activeSection as keyof SelectedFilters]);
    
  },[activeSection])

  const handleFilterSelect = (section: keyof FilterData, filter: string) => {
    setSelectedFilters((prev) => {
      if (!prev[section].includes(filter)) {
        return {
          ...prev,
          [section]: [...prev[section], filter],
        };
      }
      return prev;
    });
    applyFilters()
  };

  const handleFilterRemove = (section: keyof FilterData, filter: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item !== filter),
    }));
    applyFilters()
  };

  const applyFilters = () => {
    dispatch(updateFeedPreference({...selectedFilters,isApplied : true}));
  };

  if (isLoading) {
    return <div className="text-center text-secondaryDarker">Loading filters...</div>;
  }

  return (
    <div className="p-6 pt-0 bg-primary text-secondaryDarker rounded-lg shadow-md">
      <h2>Personalize</h2>
      <div className="flex space-x-4 mb-6">
        {["category", "source", "authors"].map((key) => (
          <Button
            key={key}
            variant="text"
            className={`px-4 py-2 rounded-md border border-secondary ${
              activeSection === key
                ? "bg-primary text-secondaryDark"
                : "bg-secondaryLight text-secondaryDarker"
            }`}
            onClick={() =>
              setActiveSection(key)
            }
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Button>
        ))}
      </div>

      {activeSection && (
        <div className="bg-secondaryLight p-4 rounded-md border border-secondary mb-4">
          <div className="mb-4">
            {selectedFilters[activeSection as keyof SelectedFilters].map((filter,index:number) => (
              <button
                key={index}
                className="inline-flex items-center px-3 py-1 mr-2 mb-2 bg-primary text-secondaryDarker rounded-md"
              >
                {filter}
                <CgClose
                  className="ml-2 w-4 h-4 cursor-pointer"
                  onClick={() =>
                    handleFilterRemove(activeSection as keyof FilterData, filter)
                  }
                />
              </button>
            ))}
          </div>
          <SearchInput
            placeholder={`Search ${activeSection}`}
            onInputChange={handleSearchChange}
            onSubmit={()=>{}}
          />

          <div className="mt-4 grid grid-cols-2 gap-2">
            {filteredData[activeSection as keyof FilterData]?.map((item: string,index : number) => (
              <button
                key={index}
                className="px-3 py-2 bg-secondaryLight border border-secondary rounded-md hover:bg-primary hover:text-secondaryDarker"
                onClick={() =>
                  handleFilterSelect(activeSection as keyof FilterData, item)
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* <button
        className="w-full py-3 bg-primary text-secondaryDarker font-semibold rounded-md mt-6"
        onClick={applyFilters}
      >
        Apply Filters
      </button> */}
    </div>
  );
};

export default Personalize;