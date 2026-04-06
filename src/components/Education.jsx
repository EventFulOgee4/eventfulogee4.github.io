import '../styles/Education.css'

export default function Education(props) {
    return (
        <section ref={props.educationSection} className="education-section">
            <header className="section-header">EDUCATION</header>
            <div className="education-card">
                <div className="education-header">
                    <div>
                        <h2 className="education-uni">University of Calgary</h2>
                        <h3 className="education-degree">Bachelor of Science — Computer Science</h3>
                    </div>
                    <span className="education-date">2024 – 2028</span>
                </div>
                <div className="education-details">
                    <div className="education-detail-item">
                        <span className="detail-label">Focus</span>
                        <span className="detail-value">Machine Learning · Data Science · Software Engineering</span>
                    </div>
                </div>
            </div>
        </section>
    )
}