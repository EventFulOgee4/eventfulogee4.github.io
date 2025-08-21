export default function Skills(props){
    return(
        <section ref={props.skillsSection} className="skills-section">
            <header className="section-header">
                SKILLS
            </header>
            <section className="main-skills">
                <ul>
                    <section className="lang-list">
                        <li>Languages: </li>
                        <div className="lang-container">
                            <p>HTML</p>
                            <i><img className="lang-logo" src="html-logo.svg" alt="html-logo"/></i>
                        </div>
                        <div className="lang-container">
                            <p>CSS</p>
                            <i><img className="lang-logo" src="css-logo.svg" alt="css-logo"/></i>
                        </div>
                        <div className="lang-container">
                            <p>C++</p>
                            <i><img className="lang-logo" src="cpp-logo.svg" alt="c++-logo"/></i>
                        </div>
                        <div className="lang-container">
                            <p>JAVASCRIPT</p>
                            <i><img className="lang-logo" src="javascript-logo.svg" alt="js-logo"/></i>
                        </div>
                        <div className="lang-container">
                            <p>C</p>
                            <i><img className="lang-logo" src="c-logo.svg" alt="c-logo"/></i> 
                        </div>
                        <div className="lang-container">
                            <p>PYTHON</p>
                            <i><img className="lang-logo" src="python-logo.svg" alt="python-logo"/></i>
                        </div>
                        <div className="lang-container">
                            <p>JAVA</p>
                            <i><img className="lang-logo" src="java-logo.svg" alt="java-logo"/></i>
                        </div>
                    </section>
                    <section className="fram-list">
                        <li>Frameworks/Libraries: </li>
                        <div className="lang-container">
                            <p>REACT</p>
                            <i><img className="lang-logo" src="react-logo.svg" alt="html-logo"/></i>
                        </div>
                        <div className="lang-container">
                            <p>NODE.JS</p>
                            <i><img className="nodejs-logo" src="nodejs-logo.svg" alt="html-logo"/></i>
                        </div>
                        <div className="lang-container">
                            <p>KAPLAY</p>
                            <i><img className="kaplay-logo" src="kaplay-logo.png" alt="html-logo"/></i>
                        </div>
                    </section>
                    <section className="devtools-list">
                        <li>Developers Tools: </li>
                        <div className="lang-cotntainer">
                            <p>GIT</p>
                        </div>
                        <div className="lang-cotntainer">
                            <p>VSCODE</p>
                        </div>
                        <div className="lang-cotntainer">
                            <p>DOCKER</p>
                        </div>
                        <div className="lang-cotntainer">
                            <p>ECLIPSE</p>
                        </div>
                        <div className="lang-cotntainer">
                            <p>INTELLIJ</p>
                        </div>
                    </section>
                </ul>
            </section>
        </section>
    )
}