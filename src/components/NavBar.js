import "./NavBar.scss"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navBar">
            <ul>
                <li>
                    <Link to="/">home()</Link>
                </li>
                <li>
                    <Link to="/about">about_me()</Link>
                </li>
                <li>
                    <Link to="/projects">projects()</Link>
                </li>
            </ul>

            <div className="contactDetails">
                <span>Contact: </span>
            </div>
        </div>
    )
}

export default NavBar