import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGuardianSections } from "../../services/guardianApiServices";
import { getNewsApiSources } from "../../services/newsApiServices";
import { newsApiCategories } from "../../constants/newsApiConstants";
import {
  newYorkTimesCategories,
  newYorkTimesAuthor,
  newYorkTimesSources,
} from "../../constants/newYorkTimesConstants";
import { ICategories, IInitialStateFilters } from "../../types/Categories";


export const fetchFilters = createAsyncThunk(
  "filters/fetchFilters",
  async (_, { rejectWithValue }) => {
    try {
      const [guardianCategories, newsApiSources] = await Promise.all([
        getGuardianSections(),
        getNewsApiSources(),
      ]);

      // Combine all data into one object of type ICategories
      return {
        category: [
          ...newsApiCategories,
          ...newYorkTimesCategories,
          ...guardianCategories,
        ],
        source: [...newsApiSources, ...newYorkTimesSources],
        authors: [...newYorkTimesAuthor],
      } as ICategories;
    } catch (error) {
      console.error("Error fetching filters: ", error);
      return rejectWithValue("Failed to fetch filters.");
    }
  }
);

const initialState: IInitialStateFilters = {
  filters: {
    category: [],
    source: [],
    authors: [],
  },
  status: "idle",
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    resetFiltersState: (state) => {
      state.filters = initialState.filters;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.filters = action.payload;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { resetFiltersState } = filtersSlice.actions;

export default filtersSlice.reducer;
