import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">About Me</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar