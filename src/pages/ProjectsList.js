import "./ProjectsList.scss"
import { Link } from "react-router-dom"
import projects from "../components/ProjectDetails"

const ProjectsList = () => {
    return (
        <>
            <div className="project">
                {projects.map(project => (
                    <Link to={`/${project.name}`}>
                        <div className="project-header">
                            <h3>{project.title}</h3>
                            <img src={`/language_icons/${project.language}.png`}/>
                        </div>
                        <p>{project.description}</p>
                    </Link>
                ))}
            </div>
            
        </>
        
    )
}

export default ProjectsList