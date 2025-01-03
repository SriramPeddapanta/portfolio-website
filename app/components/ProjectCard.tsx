const ProjectCard: React.FC<{ title: string; description: string; link: string }> = ({ title, description, link }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>{description}</p>
            <a href={link} className="text-blue-500 hover:underline">View Project</a>
        </div>
    );
}

export default ProjectCard;
