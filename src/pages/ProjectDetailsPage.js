import { useParams } from "react-router-dom";
import projects from "../components/ProjectDetails";

const ProjectDetailsPage = () => {
    const { projectId } = useParams()
    const project = projects.find(project => project.name === projectId)

    return (
        <>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
        </>
    )
}

export default ProjectDetailsPage