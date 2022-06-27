import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import Axios from "axios";
import { z } from "zod";
import { TmdbMovieData } from "../../../types/Tmdb";

export const appRouter = trpc
    .router()
    .query("hello", {
        input: z.object({
            data: z.string(),
        }),
        resolve({ input }) {
            return {
                data: `Hello ${input.data}`,
            };
        },
    })
    .query("getMovieData", {
        input: z.object({
            tmdbId: z.number(),
        }),
        async resolve({ input }): Promise<TmdbMovieData> {
            const req = await Axios({
                method: "GET",
                url: `https://api.themoviedb.org/3/movie/${input.tmdbId}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
            })
            return req.data;
        },
    });

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
});
