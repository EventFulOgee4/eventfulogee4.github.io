import '../styles/About.css'

export default function About(props){
    return (
        <section ref={props.aboutSection} className="about-section">
            <header className="section-header">
                ABOUT
            </header>
            <section className="main-about">
                <h2>Hello World!</h2>
                <h3>
                    <span>
                        My name is Javad, I'm a curious and driven problem-solver studying Computer Science at the University of Calgary, 
                        with a strong focus on Machine Learning, Data Science, and Software Engineering. I love building intelligent systems, 
                        uncovering insights from data, and writing clean, effective code that creates real value.
                    </span>

                    <span>
                        From training machine learning models to analyzing complex data and developing full-stack applications, 
                        I thrive on projects that push me to think critically and grow.
                    </span>

                    <span>
                        I'm eager to keep evolving as an engineer and to collaborate on impactful projects—especially those that bring together 
                        data and smart technologies to address real-world challenges.
                    </span>
                </h3>
            </section>
        </section>
    )
}