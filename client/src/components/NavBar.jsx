import React, {Component} from 'react'
const { default: Login } = require("./Login")

class NavBar extends Component {
    render() {

        return (
            <nav className="navBar">
                <ul className="navList">
                    <li className="navItem">
                        <a href='/'>Home</a>
                    </li>
                    <li className="navItem">
                        <a href="/trending">Trending</a>
                    </li>
                    {/* <li className="navItem">
                        <a href='/watched'>Watched</a>
                    </li> */}
                </ul>
                <Login />
            </nav>
        );
    }
}

export default NavBar;
