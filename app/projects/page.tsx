import ProjectCard from '../_components/ProjectCard';

const Projects = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard title="AI Project 1" description="Description of AI Project 1" link="#" />
                <ProjectCard title="AI Project 2" description="Description of AI Project 2" link="#" />
                {/* Add more ProjectCard components as needed */}
            </div>
        </div>
    );
};

export default Projects;
