const { default: Axios } = require("axios")


const getPopularMovies = async () => {
    return await Axios({
        headers: {
            "content-type": "application/json",
            "trakt-api-version": 2,
            "trakt-api-key": process.env.REACT_APP_CLIENT_ID
        },
        method: "GET",
        url: "https://api.trakt.tv/movies/popular?limit=50"
    })

}

const getTrendingMovies = async () => {
    return await Axios({
        headers: {
            "content-type": "application/json",
            "trakt-api-version": 2,
            "trakt-api-key": process.env.REACT_APP_CLIENT_ID
        },
        method: "GET",
        url: "https://api.trakt.tv/movies/trending?limit=50"
    })

}

module.exports.getPopularMovies = getPopularMovies;
module.exports.getTrendingMovies = getTrendingMovies;