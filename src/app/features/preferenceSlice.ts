import { createSlice } from "@reduxjs/toolkit";
import { IPreferenceState } from "../../types/States";

const initialState: IPreferenceState = {
  feedPreference: {
    isApplied: false,
    category: [],
    source: [],
    authors: [],
  },
  searchPreference: {
    isApplied: false,
    category: [],
    source: [],
    date: {
      from: "",
      to: "",
    },
  },
};

export const preferenceSlice = createSlice({
  name: "prefference",
  initialState: initialState,
  reducers: {
    updateFeedPreference: (state, action) => {
      state.feedPreference = action.payload;
    },
    resetFeedPrefernce: (state, action) => {
        state.feedPreference = initialState.feedPreference;
    },
    updateSearchPreference: (state, action) => {
      state.searchPreference = action.payload;
    },
    resetSearchPreference: (state, action) => {
        state.searchPreference = initialState.searchPreference;
    }
  },
});

export const { updateFeedPreference, resetFeedPrefernce, updateSearchPreference, resetSearchPreference } =
  preferenceSlice.actions;

export default preferenceSlice.actions;
