import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import Axios from "axios";
import { getToken } from "next-auth/jwt";
import { z } from "zod";
import { TmdbMovieData } from "../../../types/Tmdb";
import {
    TraktPopularMovie,
    TraktTrendingMovie,
    TraktWatchedMovie,
} from "../../../types/Trakt";

export const createContext = async ({
    req,
    res,
}: trpcNext.CreateNextContextOptions) => {
    return {
        req,
        res,
    };
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const appRouter = trpc
    .router<Context>()
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
    .query("public.getMovieData", {
        input: z.object({
            tmdbId: z.number(),
        }),
        async resolve({ input }): Promise<TmdbMovieData> {
            const req = await Axios({
                method: "GET",
                url: `https://api.themoviedb.org/3/movie/${input.tmdbId}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
            });
            return req.data;
        },
    })
    .query("public.getPopularMovies", {
        input: z.object({
            nMovies: z.number().nullable().default(50),
        }),
        async resolve({ input }): Promise<Array<TraktPopularMovie>> {
            const req = await Axios({
                headers: {
                    "content-type": "application/json",
                    "trakt-api-version": 2,
                    "trakt-api-key": process.env.TRAKT_CLIENT_ID!,
                },
                method: "GET",
                url: `https://api.trakt.tv/movies/popular?limit=${input.nMovies}`,
            });
            return req.data;
        },
    })
    .query("public.getTrendingMovies", {
        input: z.object({
            nMovies: z.number().nullable().default(50),
        }),
        async resolve({ input }): Promise<Array<TraktTrendingMovie>> {
            const req = await Axios({
                headers: {
                    "content-type": "application/json",
                    "trakt-api-version": 2,
                    "trakt-api-key": process.env.TRAKT_CLIENT_ID!,
                },
                method: "GET",
                url: `https://api.trakt.tv/movies/trending?limit=${input.nMovies}`,
            });
            return req.data;
        },
    })
    .query("getUserWatchedMovies", {
        async resolve({ ctx }): Promise<Array<TraktWatchedMovie>> {
            const token = await getToken({
                req: ctx.req,
                secret: process.env.NEXTAUTH_SECRET,
            });
            const req = await Axios({
                headers: {
                    "content-type": "application/json",
                    "trakt-api-version": 2,
                    "trakt-api-key": process.env.TRAKT_CLIENT_ID!,
                    Authorization: `Bearer ${token?.access_token}`,
                },
                method: "GET",
                url: `https://api.trakt.tv/users/me/history/movies`,
            });
            return req.data;
        },
    });

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext,
    responseMeta({ ctx, paths, type, errors }) {
        const allPublic =
            paths && paths.every((path) => path.includes("public"));
        const allOk = errors.length === 0;
        const isQuery = type === "query";

        if (ctx?.res && allPublic && allOk && isQuery) {
            // cache request for 1 day + revalidate once every second
            const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
            return {
                headers: {
                    "cache-control": `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
                },
            };
        }
        return {};
    },
});
