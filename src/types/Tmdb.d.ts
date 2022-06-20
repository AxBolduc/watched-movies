export type TmdbMovieData = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: object;
    budget: number;
    genres: Array<TmdbGenre>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<TmdbProductionCompany>;
    production_countries: Array<TmdbProductionCountry>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<TmdbSpokenLanguage>;
    status: "Released" | "Post Production" | "Rumored" | "Planned" | "In Production" | "Canceled";
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type TmdbGenre = {
    id: number;
    name: string;
};

export type TmdbProductionCompany = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
};

export type TmdbProductionCountry = {
    iso_3166_1: string;
    name: string;
}

export type TmdbSpokenLanguage = {
    iso_639_1: string;
    name: string;
}
