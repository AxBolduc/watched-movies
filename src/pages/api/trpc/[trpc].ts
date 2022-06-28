import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import Axios from "axios";
import { z } from "zod";
import { TmdbMovieData } from "../../../types/Tmdb";

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
    });

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext,
    responseMeta({ctx, paths, type, errors }) {
        // assuming you have all your public routes with the keyword `public` in them
        const allPublic =
            paths && paths.every((path) => path.includes("public"));
        // checking that no procedures errored
        const allOk = errors.length === 0;
        // checking we're doing a query request
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
