import "./NavBar.scss"
import { Link } from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';



async function scrollTo(element) {
    document.getElementsByClassName('section')[element].scrollIntoView({ behavior: "smooth" });
}

const NavBar = () => {
    return (
        <div className="navBar">
            <ul>
                <li>
                    <a onClick={() => scrollTo(0)}><HomeOutlinedIcon/></a>
                </li>
                <li>
                    <a onClick={() => scrollTo(1)}><HandymanOutlinedIcon/></a>
                </li>
                <li>
                    <a onClick={() => scrollTo(2)}><WorkOutlineOutlinedIcon/></a>
                </li>
                <li>
                    <a onClick={() => scrollTo(3)}><SchoolOutlinedIcon/></a>
                </li>
                <li>
                    <a onClick={() => scrollTo(4)}><TerminalOutlinedIcon/></a>
                </li>
            </ul>
        </div>
    )
}



export default NavBar