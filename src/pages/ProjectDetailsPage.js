import "./ProjectDetailsPage.scss"
import { useParams } from "react-router-dom";
import projects from "../components/ProjectDetails";
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectDetailsPage = () => {
    const { projectId } = useParams()
    const project = projects.find(project => project.name === projectId)

    return (
        <>
            <div className="project-header">
                <h1>{project.title}</h1>
                <a href={project.github}><GitHubIcon/></a>
            </div>
            
            <p>{project.description}</p>
        </>
    )
}

export default ProjectDetailsPage