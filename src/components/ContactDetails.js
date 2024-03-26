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
                <li className="grow">
                    <a onClick={() => setClipboard("6477644675")}><PhoneIcon sx={{color: "black"}}/></a>
                    <span className="tooltip">647-764-4675</span>
                </li>
                <li className="grow">
                    <a onClick={() => setClipboard("nicolae.semionov@gmail.com")}><EmailIcon sx={{color: "black"}}/></a>
                    <span className="tooltip">nicolae.semionov@gmail.com</span>
                </li>
                <li className="grow">
                    <a href="https://github.com/NicoSem"><GitHubIcon sx={{color: "black"}}/></a>
                </li>
                <li className="grow">
                    <a href="https://www.linkedin.com/in/nicolae-semionov-4b70041ab/"><LinkedInIcon sx={{color: "black"}}/></a>
                </li>
            </ul>
        </div>
    )
}



export default ContactDetails