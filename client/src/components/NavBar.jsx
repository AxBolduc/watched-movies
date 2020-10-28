const { useEffect } = require("react")
const { default: Login } = require("./Login")

const NavBar = () => {
    return ( 
        <nav className="navBar">
            <ul className="navList">
                <li className="navItem">
                    <a href='#'>Home</a>
                </li>
                <li className="navItem">
                    <a href='#'>Watched</a>
                </li>
            </ul>
            <Login />
        </nav>
     );
}
 
export default NavBar;