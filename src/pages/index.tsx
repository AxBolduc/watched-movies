import { useSession } from "next-auth/react";
import { Movie } from "../components/Movie";
import { NavBar } from "../components/NavBar";
import { trpc } from "../util/trpc";



const Home = () => {
    const { data, isLoading } = trpc.useQuery([
        "public.getPopularMovies",
        { nMovies: 50 },
    ]);

    return (
        <div className="">
            <NavBar />
            <div id="MovieGrid" className="m-4 flex flex-wrap justify-around">
                {data?.map((movie) => {
                    return (
                        <Movie key={movie.ids.trakt} tmdbId={movie.ids.tmdb} />
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
