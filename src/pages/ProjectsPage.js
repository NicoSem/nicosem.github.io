import { Link } from "react-router-dom"
import projects from "../components/ProjectDetails"

const ProjectsPage = () => {
    return (
        <>
            <h1>Projects</h1>
            {projects.map(project => (
                <Link to={`/projects/${project.name}`}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </Link>
            ))}
        </>
        
    )
}

export default ProjectsPage