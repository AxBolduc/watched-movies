const { default: Axios } = require("axios")


export const getPopularMovies = async () => {
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

export const getTrendingMovies = async () => {
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

const getWatchedMovies = async (token) => {
    return await Axios({
        headers: {
            "content-type": "application/json",
            "authorization": "Bearer " + token,
            "trakt-api-version": 2,
            "trakt-api-key": process.env.REACT_APP_CLIENT_ID
        },
        method: "GET",
        url: "https://api.trakt.tv/sync/watched/type?limit=50"
    })

}
