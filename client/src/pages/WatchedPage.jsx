import {Component} from 'react';
import Axios from 'axios';
import {getWatchedMovies} from '../apis/trakt';
import Movie from '../components/Movie';
import Modal from "../components/Modal/Modal";
import getMovieDetails from '../apis/tmdb';

class WatchedPage extends Component {

    constructor(props){
        super(props)
        this.state = {
			watchedMovies: [],
			isLogged: false,
			modalMovie: {},
			modalShow: false,
		};
    }

    componentDidMount() {
        Axios({
            method: "GET",
            url: "/auth/user"
        }).then((res) => {
            this.setState({ isLogged: !!res.data.user });
            if (this.state.isLogged) {
                getWatchedMovies().then((data) => {
                    this.setState({ watchedMovies: data.data })
                })
            }


        }).catch((err) => {
            //do nothing
        });
    }

    render() { 
        return (
			<>
				<div className="movieContainer">
					{this.state.watchedMovies.length > 0 &&
						this.state.watchedMovies.map((movie) => (
							<Movie
								Key={movie.movie.ids.tmdb}
								{...movie.movie}
                                onClick={()=>{
                                    this.setState({modalShow: true})
                                    getMovieDetails(movie.movie.ids.tmdb).then((res)=>{
                                        this.setState({modalMovie: res.data})
                                    })
                                }}
							/>
						))}
				</div>
				<Modal
					onClose={() => this.setState({modalShow: false})}
					movie={this.state.modalMovie}
					show={this.state.modalShow}
				/>
			</>
		);
    }
}
 
export default WatchedPage;