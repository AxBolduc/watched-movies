export type TraktPopularMovie = {
    title: string;
    year: number;
    ids: {
      trakt: number;
      slug: string;
      imdb: string;
      tmdb: number;
    }
}
export type TraktTrendingMovie = {
  "watchers": number;
  "movie": TraktPopularMovie;
}