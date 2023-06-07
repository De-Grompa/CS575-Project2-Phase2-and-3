export interface Movie {
  [key: string]: any;
  id: number;
  imdb_id: string;
  popularity: number;
  budget: number;
  revenue: number;
  title: string;
  cast: string[];
  homepage: string;
  director: string;
  tagline: string;
  keywords: string[];
  shortSummary: string;
  genres: string[];
  productionCompanies: string[];
  releaseDate: string;
  voteCount: number;
  voteAverage: number;
  releaseYear: number;
  budgetAdjusted: number;
  revenueAdjusted: number;
}