import { Movie } from "../components/Movie";
import { NavBar } from "../components/nav/NavBar";
import { trpc } from "../util/trpc";

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
