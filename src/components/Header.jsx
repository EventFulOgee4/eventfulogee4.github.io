import "../styles/Header.css"
import React from "react"

export default function Header(props){

    return (
    <>
        <section id="header">
            <header className="main-header">
                <button onClick={props.scrollToIntro} id="icon-logo">
                    <img src="cleaned_logo.png" alt="logo"/>
                </button>
                <div className="navs">
                    <button onClick={props.scrollToAbout} className="nav-button">
                        ABOUT
                    </button>
                    <button onClick={props.scrollToSkills} className="nav-button">
                        SKILLS
                    </button>
                    <button onClick={props.scrollToExperience} className="nav-button">
                        EXPERIENCE
                    </button>
                    <button onClick={props.scrollToEducation} className="nav-button">
                        EDUCATION
                    </button>
                    <button onClick={props.scrollToProjects} className="nav-button">
                        PROJECTS
                    </button>
                    <button onClick={props.scrollToContact} className="nav-button">
                        CONTACT
                    </button>
                </div>
            </header>
        </section>
    </>
    )
}