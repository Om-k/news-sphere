import { createSlice } from "@reduxjs/toolkit";
import { IPreferenceState } from "../../types/States";
import { mergeUnique } from "../../utils/arrayUtils";

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
  name: "preference",
  initialState: initialState,
  reducers: {
    updateFeedPreference: (state, action) => {
      state.feedPreference = action.payload;
    },
    resetFeedPreference: (state, _action) => {
      //_ to avoid warnings
      state.feedPreference = initialState.feedPreference;
    },
    updateSearchPreference: (state, action) => {
      state.searchPreference = action.payload;
    },
    resetSearchPreference: (state, _action) => {
      state.searchPreference = initialState.searchPreference;
    },
    mergeFeedPreferenceIntoSearch: (state, _action) => {
      state.searchPreference.category = mergeUnique(
        state.searchPreference.category ?? [],
        state.feedPreference.category ?? []
      );
      state.searchPreference.source = mergeUnique(
        state.searchPreference.source ?? [],
        state.feedPreference.source ?? []
      );
      state.searchPreference.isApplied =
        state.feedPreference.isApplied || state.searchPreference.isApplied;
    },
  },
});

export const {
  updateFeedPreference,
  resetFeedPreference,
  updateSearchPreference,
  resetSearchPreference,
  mergeFeedPreferenceIntoSearch,
} = preferenceSlice.actions;

export default preferenceSlice.reducer;
