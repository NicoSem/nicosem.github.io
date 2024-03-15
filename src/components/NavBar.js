import "./NavBar.scss"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navBar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar