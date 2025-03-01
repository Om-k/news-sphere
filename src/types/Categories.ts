export interface ICategories {
  category?: string[];
  source?: string[];
  authors?: string[];
}

export interface IInitialStateFilters {
  filters: ICategories;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
