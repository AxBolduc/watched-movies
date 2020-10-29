import {Component} from 'react';
import NavBar from "../components/NavBar";

class TrendingPage extends Component {

    componentDidMount() {
        const {match: {params}} = this.props;
    }

    state = {  }
    render() { 
        return ( 
            <>
            <NavBar />
            </>
         );
    }
}
 
export default TrendingPage;