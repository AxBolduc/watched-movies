import { Movie } from "../components/Movie";
import { NavBar } from "../components/nav/NavBar";
import { trpc } from "../util/trpc";

const Home = () => {
    const { data, isLoading } = trpc.useQuery([
        "getUserWatchedMovies",
    ]);

    return (
        <div className="">
            <NavBar />
            <div id="MovieGrid" className="m-4 flex flex-wrap ">
                {data?.map((movie) => {
                    return (
                        <Movie key={movie.movie.ids.trakt} tmdbId={movie.movie.ids.tmdb} />
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
