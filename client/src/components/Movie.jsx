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

    let imageSrc;

    if(movie){
        imageSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }else{
        imageSrc = "";
    }

        return (
            <div className="movie" onClick={props.onClick}>
                <div className="movie-header">
                    <img src={imageSrc} alt="" />
                </div>
                <div className="movie-info">{movie.title}</div>
            </div>
        );
}

export default Movie;
