import "./ProjectsPage.scss"
import { Link } from "react-router-dom"
import projects from "../components/ProjectDetails"

const ProjectsPage = () => {
    return (
        <>
            <h1>Projects</h1>
            <div className="project">
                {projects.map(project => (
                    <Link to={`/projects/${project.name}`}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </Link>
                ))}
            </div>
            
        </>
        
    )
}

export default ProjectsPage