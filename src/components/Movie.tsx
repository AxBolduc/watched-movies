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
        <div className="bg-stone-600 rounded-lg flex flex-col m-2 hover:scale-105 transition-transform">
            {isLoading ? (
                <img
                    className="rounded-t-lg"
                    src={loading.src}
                    width={300}
                    height={450}
                />
            ) : (
                <img
                    className="rounded-t-lg"
                    width={300}
                    height={450}
                    src={`https://image.tmdb.org/t/p/w300/${data?.poster_path}`}
                />
            )}
            <div className="bg-stone-700 rounded-b-lg py-2 text-center text-sm h-full align-text-bottom  text-white">
                {data?.title}
            </div>
        </div>
    );
};
