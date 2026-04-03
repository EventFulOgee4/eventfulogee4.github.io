import "../styles/Skills.css"

const langSkills = [
    { name: "HTML", logo: "html-logo.svg", alt: "html-logo", cls: "lang-logo" },
    { name: "CSS", logo: "css-logo.svg", alt: "css-logo", cls: "lang-logo" },
    { name: "C++", logo: "cpp-logo.svg", alt: "c++-logo", cls: "lang-logo" },
    { name: "JavaScript", logo: "javascript-logo.svg", alt: "js-logo", cls: "lang-logo" },
    { name: "C", logo: "c-logo.svg", alt: "c-logo", cls: "lang-logo" },
    { name: "Python", logo: "python-logo.svg", alt: "python-logo", cls: "lang-logo" },
    { name: "Java", logo: "java-logo.svg", alt: "java-logo", cls: "lang-logo" },
]

const frameworkSkills = [
    { name: "React", logo: "react-logo.svg", alt: "react-logo", cls: "react-logo" },
    { name: "Node.js", logo: "nodejs-logo.svg", alt: "nodejs-logo", cls: "nodejs-logo" },
    { name: "Kaplay", logo: "kaplay-logo.png", alt: "kaplay-logo", cls: "kaplay-logo" },
]

const devtoolSkills = [
    { name: "Git", logo: "git-logo.svg", alt: "git-logo", cls: "git-logo" },
    { name: "VS Code", logo: "vscode-logo.svg", alt: "vscode-logo", cls: "vscode-logo" },
    { name: "Docker", logo: "docker-logo.svg", alt: "docker-logo", cls: "docker-logo" },
    { name: "Eclipse", logo: "eclipse-logo.svg", alt: "eclipse-logo", cls: "eclipse-logo" },
    { name: "IntelliJ", logo: "intellij-logo.svg", alt: "intellij-logo", cls: "intellij-logo" },
]

function SkillGroup({ title, skills }) {
    return (
        <div className="skill-group">
            <p className="skill-group-label">{title}</p>
            <div className="skill-row">
                {skills.map((skill) => (
                    <div key={skill.name} className="lang-container">
                        <span className="skill-tooltip">{skill.name}</span>
                        <img className={skill.cls} src={skill.logo} alt={skill.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Skills(props) {
    return (
        <section ref={props.skillsSection} className="skills-section">
            <header className="section-header">SKILLS</header>
            <div className="main-skills">
                <SkillGroup title="Languages" skills={langSkills} />
                <SkillGroup title="Frameworks & Libraries" skills={frameworkSkills} />
                <SkillGroup title="Developer Tools" skills={devtoolSkills} />
            </div>
        </section>
    )
}