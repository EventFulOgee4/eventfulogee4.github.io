import '../styles/Experience.css'

export default function Experience(props) {
    return (
        <section ref={props.experienceSection} className="experience-section">
            <header className="section-header">EXPERIENCE</header>
            <div className="experience-card">
                <div className="experience-header">
                    <div>
                        <h2 className="experience-company">Kapital Bank</h2>
                        <h3 className="experience-role">Software Developer Intern</h3>
                    </div>
                    <span className="experience-date">2022</span>
                </div>
                <ul className="experience-bullets">
                    <li>
                        Collaborated with a development team to build and maintain internal systems
                        and customer-facing banking applications using React, JavaScript, HTML, and CSS.
                    </li>
                    <li>
                        Wrote clean, efficient code and resolved bugs to ensure reliability and
                        performance across production software solutions.
                    </li>
                    <li>
                        Contributed to agile sprints — participating in code reviews, standups, and
                        cross-functional collaboration in a fast-paced fintech environment.
                    </li>
                </ul>
            </div>
        </section>
    )
}