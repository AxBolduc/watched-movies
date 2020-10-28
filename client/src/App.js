import './App.css';

import {useEffect, useState} from 'react'

import Movie from './components/Movie'
import NavBar from './components/NavBar';

function App() {
  const [movies, setMovies] = useState([]);


  return (
    <>
    <NavBar />
    <div className="movieContainer">
      {movies.map((movie) =>(
        <Movie />
      ))}
    </div>
    </>
  );
}

export default App;
