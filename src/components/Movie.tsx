import Axios, { AxiosResponse } from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TmdbMovieData } from "../types/Tmdb";

interface MovieProps {
    tmdbId: number;
}

export const Movie: React.FunctionComponent<MovieProps> = (props) => {
    const [movieData, setMovieData] = useState<TmdbMovieData>();

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            Axios({
                url: `/api/tmdb/${props.tmdbId}`,
            }).then((res: AxiosResponse) => {
                setMovieData(res.data);
            });
        }
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div className="bg-stone-600 rounded-lg flex flex-col m-2 hover:scale-105 transition-transform">
            <Image
                className="rounded-t-lg"
                width={300}
                height={450}
                src={`https://image.tmdb.org/t/p/w300/${movieData?.poster_path}`}
            />
            <div className="bg-stone-700 rounded-b-lg py-2 text-center  text-white">
                {movieData?.title}
            </div>
        </div>
    );
};
