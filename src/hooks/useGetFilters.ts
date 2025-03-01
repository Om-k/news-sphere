import { useDispatch, useSelector } from "react-redux";
import { fetchFilters } from "../app/features/allFiltersSlice";
import { RootState, AppDispatch } from "../app/store";
import { useEffect } from "react";

export const useGetFilters = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const { status } = useSelector((state: RootState) => state.filters); 

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFilters());
    }
  },[])

  return {isLoading: status === "loading", isLoaded: status === "succeeded" };
};
