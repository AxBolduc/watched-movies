import Movie from '../components/Movie'
import {getPopularMovies} from '../apis/trakt';
import {useEffect, useState} from 'react'
import Modal from "../components/Modal/Modal";

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        getPopularMovies().then((data) => {
            setMovies(data.data);
        })
    }, [])

    function showModal(){
        setModalShow(!modalShow);
        console.log("SHOW");
    }


    return (
      <>
        <div className="movieContainer">
          {movies.map((movie) => (
            <Movie Key={movie.ids.tmdb} {...movie} onClick={showModal}   />
          ))}
        </div>
        <Modal onClose={showModal} show={modalShow}>Lappa</Modal>
      </>
    );

}
 
export default HomePage;
