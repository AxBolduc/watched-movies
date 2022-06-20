// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TmdbMovieData } from "../../../types/Tmdb";
import Axios, { AxiosResponse } from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TmdbMovieData>
) {
    return new Promise((resolve, reject) => {
        Axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/${req.query.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
        }).then((response: AxiosResponse) => {
            res.status(200).json(response.data);
            resolve(null);
        });
    });
}
