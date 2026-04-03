import "../styles/Projects.css"

const projects = [
    {
        title: "SonicRunner",
        description: "A fully functional web game letting users experience what it's like to be the fastest hedgehog ever.",
        tags: ["JavaScript", "Kaplay.js", "HTML5"],
        url: "https://github.com/EventFulOgee4/SonicRunner",
    },
    {
        title: "Eng-Master",
        description: "A web app that uses AI to suggest the best engineering project ideas based on the user's technical skills and tools.",
        tags: ["React", "Node.js", "AI/LLM"],
        url: "https://github.com/EventFulOgee4/EngMaster",
    },
    {
        title: "Aither",
        description: "An AI-powered therapy app that provides emotionally adaptive conversations, mood tracking, and personalized support through both cloud-based and locally trained models.",
        tags: ["React", "Claude API", "Django", "PostqreSQL", "PyTorch"],
        url: "https://github.com/EventFulOgee4/Aither",
    },
]

export default function Projects(props) {
    return (
        <section ref={props.projectsSection} className="projects-section">
            <header className="section-header">PROJECTS</header>
            <div className="projects-grid">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="project-link"
                    >
                        <div className="project-container">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            <span className="project-github-hint">View on GitHub ↗</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}