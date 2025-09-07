import '../styles/Education.css'

export default function Education(props){
    return(
        <section ref={props.educationSection} className="education-section">
            <header className="section-header">
                EDUCATION
            </header>
                <div className="uni-container">
                    <h2>
                        University of Calgary
                    </h2>
                </div>
                <div className="major-container">
                    <h3>Bachelor of science, Computer Science</h3>
                </div>
        </section>
    )
}