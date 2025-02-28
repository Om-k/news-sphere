// Base interface for preferences
export interface IBasePreference {
  isApplied: boolean;
  category: string[];
  source: string[];
}

export interface IPreferenceFeed extends IBasePreference {
  authors: string[];
}

export interface IDateRange {
  from: string;
  to: string;
}

export interface IPreferenceSearch extends IBasePreference {
  date: IDateRange;
}

