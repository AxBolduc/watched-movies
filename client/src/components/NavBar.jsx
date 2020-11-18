import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const { default: Login } = require("./Login")

class NavBar extends Component {
    render() {

        return (
            <nav className="navBar">
                <ul className="navList">
                    <li className="navItem">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="navItem">
                        <Link to='/trending'>Trending</Link>
                    </li>
                    <li className="navItem">
                        <Link to='/watched'>Watched</Link>
                    </li>
                </ul>
                <Login />
            </nav>
        );
    }
}

export default NavBar;
