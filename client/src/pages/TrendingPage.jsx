import {Component} from 'react';
import getMovieDetails from '../apis/tmdb';
import {getTrendingMovies} from '../apis/trakt'
import Modal from "../components/Modal/Modal";
import Movie from "../components/Movie";

class TrendingPage extends Component {

    constructor(props){
        super(props);
        this.state = {movies: [], modalMovie: {}, modalShow: false}
    }

    componentDidMount(){
        getTrendingMovies().then((res)=>{
            this.setState({movies: res.data})
        })
    }

    render() { 
        return (
			<>
				<div className="movieContainer">
					{this.state.movies.map((movie) => (
						<Movie Key={movie.movie.ids.tmdb} {...movie.movie} onClick={() =>{
                            this.setState({modalShow: true})
                            getMovieDetails(movie.movie.ids.tmdb).then((res)=>{
                                this.setState({modalMovie: res.data});
                            })
                        }}/>
					))}
				</div>
				<Modal
					onClose={() => this.setState({ modalShow: false })}
					movie={this.state.modalMovie}
					show={this.state.modalShow}
				/>
			</>
		);
    }
}
 
export default TrendingPage;