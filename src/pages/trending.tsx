import { AxiosResponse } from "axios";
import type { NextPage } from "next";
import { Movie } from "../components/Movie";
import { NavBar } from "../components/NavBar";
import { TraktTrendingMovie } from "../types/Trakt";
const { default: Axios } = require("axios");

interface TrendingProps {
  data: Array<TraktTrendingMovie>;
}

const Trending: NextPage<TrendingProps> = ({data}) => {
    return (
        <div className="">
            <NavBar />
            <div id="MovieGrid" className="m-4 flex flex-wrap justify-between">
                {data.map((movie) => {
                    return <Movie key={movie.movie.ids.trakt} tmdbId={movie.movie.ids.tmdb} />;
                })}
            </div>
        </div>
    );
};

export async function getServerSideProps() {
    const res: AxiosResponse = await Axios({
        headers: {
            "content-type": "application/json",
            "trakt-api-version": 2,
            "trakt-api-key": process.env.TRAKT_CLIENT_ID
        },
        method: "GET",
        url: "https://api.trakt.tv/movies/trending?limit=50",
    });

    return {props: {data: res.data}};
}

export default Trending;
