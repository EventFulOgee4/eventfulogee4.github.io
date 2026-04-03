import '../styles/Contact.css'

export default function Contact(props) {
    return (
        <section ref={props.contactSection} className="contact-section">
            <header className="section-header">CONTACT</header>
            <h2 className="contact-heading">Let's connect 👇</h2>
            <section className="contact-info">
                <div className="contact-method">
                    <a
                        href="mailto:cavadmamedaliev@gmail.com"
                        aria-label="Send me an email"
                        className="contact-icon-link"
                    >
                        <img className="gmail-logo" src="Gmail_icon_(2020).svg" alt="" aria-hidden="true" />
                    </a>
                    <p>Email Me!</p>
                </div>
                <div className="contact-method">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/javad-mammadaliyev-a00700334/"
                        aria-label="Connect with me on LinkedIn"
                        className="contact-icon-link"
                    >
                        <img className="linkedin-logo" src="LinkedIn_icon.svg" alt="" aria-hidden="true" />
                    </a>
                    <p>Connect on LinkedIn</p>
                </div>
                <div className="contact-method">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/EventFulOgee4"
                        aria-label="Visit my GitHub profile"
                        className="contact-icon-link"
                    >
                        <img className="github-logo" src="github-mark.svg" alt="" aria-hidden="true" />
                    </a>
                    <p>Check out my GitHub</p>
                </div>
            </section>
        </section>
    )
}