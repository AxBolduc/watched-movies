import {Component} from 'react';
import NavBar from "../components/NavBar";
import {getTrendingMovies} from '../apis/trakt'
import Movie from "../components/Movie";

class TrendingPage extends Component {

    constructor(props){
        super(props);
        this.state = {movies: []}
    }

    componentDidMount(){
        getTrendingMovies().then((res)=>{
            this.setState({movies: res.data})
        })
    }

    render() { 
        return (
            <>
                <NavBar />
                <div className="movieContainer">
                    {this.state.movies.map((movie) => (
                        <Movie Key={movie.movie.ids.tmdb} {...movie.movie} />
                    ))}
                </div>

            </>
        );
    }
}
 
export default TrendingPage;