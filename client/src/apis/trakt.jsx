const { default: Axios } = require("axios")


export const getPopularMovies = async () => {
    return await Axios({
        method:"GET",
        url:"/api/popular"
    })
}

export const getTrendingMovies = async () => {
    return await Axios({
        method:"GET",
        url:"/api/trending"
    })
}

export const getWatchedMovies = async () => {
    return await Axios({
        method:"GET",
        url:"/api/watched"
    })
        
}
