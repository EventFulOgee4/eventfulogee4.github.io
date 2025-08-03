export default function Intro(props){

    return (
        <section ref={props.introSection} class="intro-section">
            <div class="animate__animated animate__backInDown">
                <div class="name-container">
                    <h1>
                        Javad Mammadaliyev
                    </h1>
                </div>
                <div class="info-container">
                    <h2>Coding with purpose and passion.</h2>
                </div>
            </div>
        </section>
    )
}
