import { AxiosResponse } from "axios";
import type { NextPage } from "next";
import { Movie } from "../components/Movie";
import { NavBar } from "../components/NavBar";
import { TraktPopularMovie } from "../types/Trakt";
import { trpc } from "../util/trpc";
const { default: Axios } = require("axios");

interface IndexProps {
  data: Array<TraktPopularMovie>;
}

const Home = () => {
    const movies: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const {data, isLoading} = trpc.useQuery(['public.getPopularMovies', {nMovies: 50}]);

    return (
        <div className="">
            <NavBar />
            <div id="MovieGrid" className="m-4 flex flex-wrap justify-between">
                {data?.map((movie) => {
                    return <Movie key={movie.ids.trakt} tmdbId={movie.ids.tmdb} />;
                })}
            </div>
        </div>
    );
};

export default Home;
