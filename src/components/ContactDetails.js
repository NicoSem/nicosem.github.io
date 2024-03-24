import "./ContactDetails.scss"
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

const ContactDetails = () => {
    return (
        <div className="navBar">
            <ul>
                <li>
                    <a onClick={() => setClipboard("6477644675")}><PhoneIcon/></a>
                </li>
                <li>
                    <a onClick={() => setClipboard("nicolae.semionov@gmail.com")}><EmailIcon/></a>
                </li>
                <li>
                    <a href="https://github.com/NicoSem"><GitHubIcon/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nicolae-semionov-4b70041ab/"><LinkedInIcon /></a>
                </li>
            </ul>
        </div>
    )
}



export default ContactDetails