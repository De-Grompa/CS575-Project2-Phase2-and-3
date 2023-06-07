export interface Movie {
  [key: string]: any;
  id: number;
  imdb_id: string;
  popularity: number;
  budget: number;
  revenue: number;
  original_title: string;
  cast: string[];
  homepage: string;
  director: string;
  tagline: string;
  keywords: string[];
  overview: string;
  runtime: number;
  genres: string[];
  production_companies: string[];
  releaseDate: string;
  vote_count: number;
  vote_average: number;
  release_year: number;
  budget_adj: number;
  revenue_adj: number;
}

// id~
//   imdb_id~
//   popularity~
//   budget~
//   revenue~
//   original_title~
//   cast~
//   homepage~
//   director~
//   tagline~
//   keywords~
//   overview~
//   runtime~
//   genres~
//   production_companies~
//   release_date~
//   vote_count~
//   vote_average~
//   release_year~
//   budget_adj~
//   revenue_adj~