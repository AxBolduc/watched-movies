import Axios, { AxiosResponse } from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TmdbMovieData } from "../types/Tmdb";
import loading from "../public/images/loading.gif";
import { trpc } from "../util/trpc";

interface MovieProps {
    tmdbId: number;
}

export const Movie: React.FunctionComponent<MovieProps> = (props) => {
    const [movieData, setMovieData] = useState<TmdbMovieData>();

    const { data, isLoading } = trpc.useQuery([
        "public.getMovieData",
        { tmdbId: props.tmdbId },
    ]);

    return (
        <div className="movie-card group">
            {isLoading ? (
                <img
                    className="rounded-lg"
                    src={loading.src}
                    width={300}
                    height={450}
                />
            ) : (
                <img
                    className="rounded-lg"
                    width={300}
                    height={450}
                    src={`https://image.tmdb.org/t/p/w300/${data?.poster_path}`}
                />
            )}
            <div className="movie-card-info group-hover:bg-opacity-70 group-hover:opacity-100 group-hover:h-full">
                <h2 className="text-white text-center font-bold text-2xl py-4 bg-stone-700 rounded-t-lg shadow-md">
                    {data?.title}
                </h2>
                <p className="text-white mt-2 px-2">
                    {data?.tagline}
                </p>
            </div>
            {/* <div className="bg-stone-700 rounded-b-lg py-2 text-center text-sm h-full align-text-bottom  text-white">
                {data?.title}
            </div> */}
        </div>
    );
};
