import ProjectCard from '../_components/ProjectCard';

const Projects = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Projects</h1>
            <ProjectCard title="AI Project 1" description="Description of AI Project 1" link="#" />
            <ProjectCard title="AI Project 2" description="Description of AI Project 2" link="#" />
        </div>
    );
};

export default Projects;
