const { default: Axios } = require("axios");


const getMovieDetails = async (id) =>{

    let data = await Axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    })

    return await data
}

module.exports = getMovieDetails