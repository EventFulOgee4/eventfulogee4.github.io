import "../styles/Projects.css"

export default function Projects(props){
    return(
        <section ref={props.projectsSection} className="projects-section">
            <header className="section-header">
                PROJECTS
            </header>
            <section className="projects-grid">
                <a href="https://github.com/EventFulOgee4/SonicRunner" target="_blank">
                    <div className="project-container">
                        <h1>SonicRunner</h1>
                        <p>A fully functional web game allowing the user to experience what it is like to be the fastest hedgehog ever.</p>
                    </div>
                </a>
                <a href="https://github.com/EventFulOgee4/EngMaster" target="_blank">
                    <div className="project-container">
                        <h1>Eng-Master</h1>
                        <p>A web app that uses AI to suggest the best engineering project ideas based on the user's technical skills and tools.</p>
                    </div>
                </a>
                <a href="https://github.com/EventFulOgee4/Chef-Claude" target="_blank">
                    <div className="project-container">
                        <h1>Chef-Claude</h1>
                        <p>An AI-powered recipe generator that lets users input their ingredients and instantly get a custom meal recipe based on what they have.</p>
                    </div>
                </a>            
            </section>
        </section>
    )
}