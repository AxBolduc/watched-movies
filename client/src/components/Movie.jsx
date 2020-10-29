import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import getMovieDetails from '../apis/tmdb';

const Movie = (props) => {
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        getMovieDetails(props.ids.tmdb).then((res)=>{
            setMovie(res.data);
        })
    },[props.ids.tmdb])

    return (
        <div className="movie">
            <div className="movie-header">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""/>
            </div>
            <div className="movie-info">
                {movie.title}
            </div>
        </div>
    )
}

export default Movie;
