import '../styles/Intro.css'

export default function Intro(props) {
    return (
        <section ref={props.introSection} className="intro-section">
            <div className="animate__animated animate__backInDown intro-content">
                <div className="name-container">
                    <h1>Javad Mammadaliyev</h1>
                </div>
                <div className="info-container">
                    <h2>Coding with purpose and passion.</h2>
                </div>
                <div className="intro-cta">
                    <button className="cta-button" onClick={props.scrollToAbout}>
                        Explore my work ↓
                    </button>
                </div>
            </div>
        </section>
    )
}