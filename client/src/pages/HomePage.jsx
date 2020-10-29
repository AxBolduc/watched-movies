import Movie from '../components/Movie'
import NavBar from '../components/NavBar';
import {getPopularMovies} from '../apis/trakt';
import {useEffect, useState} from 'react'

const HomePage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then((data) => {
            setMovies(data.data);
        })
    }, [])


    return (
        <>
            <NavBar />
            <div className="movieContainer">
                {movies.map((movie) => (
                    <Movie Key={movie.ids.tmdb} {...movie} />
                ))}
            </div>
        </>);

}
 
export default HomePage;
