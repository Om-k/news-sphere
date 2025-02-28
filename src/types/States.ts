import { IPreferenceFeed, IPreferenceSearch } from "./Filters";


export interface IPreferenceState {
  feedPreference: IPreferenceFeed,
  searchPreference: IPreferenceSearch,
}
