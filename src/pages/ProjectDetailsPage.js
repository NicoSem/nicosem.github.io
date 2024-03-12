import { useParams } from "react-router-dom";

const ProjectDetailsPage = () => {
    const { projectId } = useParams()

    return (
        <h1>This is the project page for {projectId}!</h1>
    )
}

export default ProjectDetailsPage