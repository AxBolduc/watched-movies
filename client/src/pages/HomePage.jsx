import Movie from '../components/Movie'
import {getPopularMovies} from '../apis/trakt';
import {useEffect, useState} from 'react'
import Modal from "../components/Modal/Modal";
import getMovieDetails from '../apis/tmdb';

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalMovie, setModalMovie] = useState({});

    useEffect(() => {
        getPopularMovies().then((data) => {
            setMovies(data.data);
        })
    }, [])

  function showModal(movieID) {
		setModalShow(!modalShow);
    getMovieDetails(movieID).then((res)=>{
      setModalMovie(res.data);
    })
	}

    return (
		<>
			<div className="movieContainer">
				{movies.map((movie) => (
					<Movie
						Key={movie.ids.tmdb}
						{...movie}
						onClick={() => showModal(movie.ids.tmdb)}
					/>
				))}
			</div>
			<Modal onClose={() => setModalShow(false)} movie={modalMovie} show={modalShow}>
				Lappa
			</Modal>
		</>
	);

}
 
export default HomePage;
