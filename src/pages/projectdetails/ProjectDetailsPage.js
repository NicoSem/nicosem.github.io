import "./ProjectDetailsPage.scss"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import projects from "./ProjectDetails";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { hover } from "@testing-library/user-event/dist/hover";

const ProjectDetails = () => {
    const { projectId } = useParams()
    const project = projects.find(project => project.name === projectId)

    return (
        <>
            <div className="container">
                <div className="project-header">
                    <a href="/"><ArrowBackIosIcon/></a>
                    <h1>{project.title}</h1>
                    <a href={project.github}><GitHubIcon/></a>
                </div>
                
                <p>{project.description}</p>
            </div>
            
        </>
    )
}

export default ProjectDetails