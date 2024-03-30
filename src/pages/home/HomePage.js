import "./HomePage.scss"
import AboutMe from "../../components/aboutme/AboutMe"
import Skills from "../../components/skills/Skills"
import Experience from "../../components/experience/Experience"
import Education from "../../components/education/Education"
import ProjectsList from "../projectdetails/ProjectsList"

const HomePage = () => {

    return (
        <>
            <div className="home">
                <div className="section">
                    <AboutMe />
                </div>
                <div className="section">
                    <Skills />
                </div>
                <div className="section">
                    <Experience />
                </div>
                <div className="section">
                    <Education />
                </div>
                <div className="section">
                    <ProjectsList />
                </div>
            </div>
        </>
        
    )
}

export default HomePage