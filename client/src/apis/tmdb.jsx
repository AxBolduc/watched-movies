const { default: Axios } = require("axios");


const getMovieDetails = async (id) =>{


    try {
        return await Axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
        })
    }catch(err){
        console.log(err);
        return err.response;
    }

}
export default getMovieDetails;