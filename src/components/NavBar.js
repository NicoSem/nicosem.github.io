import "./NavBar.scss"
import { Link } from "react-router-dom"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

async function setClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="left">
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
            </div>
            <div className="right">
                <a onClick={() => setClipboard("6477644675")}><PhoneIcon/></a>
                <a onClick={() => setClipboard("nicolae.semionov@gmail.com")}><EmailIcon/></a>
                <a href="https://github.com/NicoSem"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/nicolae-semionov-4b70041ab/"><LinkedInIcon /></a>
            </div>
        </div>
    )
}



export default NavBar