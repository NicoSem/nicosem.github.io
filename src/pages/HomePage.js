import "./HomePage.scss"
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import Experience from "./Experience"
import Education from "./Education"
import PostGraduate from "./PostGraduate"
import ProjectsList from "./ProjectsList"
import Collapsible from "react-collapsible"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const HomePage = () => {

    return (
        <>
            <h1>Nicolae Semionov</h1>
            <Collapsible trigger={["About Me", <ArrowRightIcon className="arrow"/>]}>
                <AboutMe />
            </Collapsible>
            <Collapsible trigger={["Skills", <ArrowRightIcon className="arrow"/>]}>
                <Skills />
            </Collapsible>
            <Collapsible trigger={["Experience", <ArrowRightIcon className="arrow"/>]}>
                <Experience />
            </Collapsible>
            <Collapsible trigger={["Education", <ArrowRightIcon className="arrow"/>]}>
                <Education />
            </Collapsible>
            <Collapsible trigger={["Post Graduate", <ArrowRightIcon className="arrow"/>]}>
                <PostGraduate />
            </Collapsible>
            <Collapsible trigger={["Projects", <ArrowRightIcon className="arrow"/>]}>
                <ProjectsList />
            </Collapsible>

        </>
        
    )
}

export default HomePage