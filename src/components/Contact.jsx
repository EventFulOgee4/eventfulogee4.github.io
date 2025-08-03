export default function Contact(props){
    return(
        <section ref={props.contactSection} className="contact-section">
            <header className="section-header">
                CONTACT
            </header>
            <h1>Contact me &#128071;</h1>
            <section className="contact-info">
                <div className="contact-method">
                    <i><img className="contact-logo" src="/Gmail_icon_(2020).svg" alt="gmail-logo"/></i>
                    <p>cavadmamedaliev@gmail.com</p>
                </div>
                <div className="contact-method">
                    <a target="_blank" href="https://www.linkedin.com/in/javad-mammadaliyev-a00700334/">
                        <i><img className="linkedin-logo" src="/LinkedIn_icon.svg" alt="linkedin-logo"/></i>
                    </a>
                    <p>I'll be happy to connect with you!</p>
                </div>
                <div className="contact-method">
                    <a target="_blank" href="https://github.com/EventFulOgee4">
                        <i><img className="github-logo" src="/github-mark.svg" alt="github-logo"/></i>
                    </a>
                    <p>Checkout my GitHub!</p>
                </div>
            </section>
        </section>
    )
}