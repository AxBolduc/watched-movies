import { AxiosResponse } from "axios";
import type { NextPage } from "next";
import { Movie } from "../components/Movie";
import { NavBar } from "../components/NavBar";
import { TraktTrendingMovie } from "../types/Trakt";
import { trpc } from "../util/trpc";
const { default: Axios } = require("axios");

const Trending = () => {
    const { data } = trpc.useQuery([
        "public.getTrendingMovies",
        { nMovies: 50 },
    ]);

    return (
        <div className="">
            <NavBar />
            <div id="MovieGrid" className="m-4 flex flex-wrap justify-between">
                {data?.map((movie) => {
                    return (
                        <Movie
                            key={movie.movie.ids.trakt}
                            tmdbId={movie.movie.ids.tmdb}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Trending;
