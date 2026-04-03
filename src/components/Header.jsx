import "../styles/Header.css"
import React, { useState, useEffect } from "react"

export default function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            const sections = [
                { name: "about", ref: props.aboutSection },
                { name: "skills", ref: props.skillsSection },
                { name: "experience", ref: props.experienceSection },
                { name: "education", ref: props.educationSection },
                { name: "projects", ref: props.projectsSection },
                { name: "contact", ref: props.contactSection },
            ]

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = sections[i].ref?.current
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sections[i].name)
                    break
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [props])

    const handleNav = (scrollFn) => {
        scrollFn()
        setMenuOpen(false)
    }

    const navItems = [
        { label: "ABOUT", fn: props.scrollToAbout, id: "about" },
        { label: "SKILLS", fn: props.scrollToSkills, id: "skills" },
        { label: "EXPERIENCE", fn: props.scrollToExperience, id: "experience" },
        { label: "EDUCATION", fn: props.scrollToEducation, id: "education" },
        { label: "PROJECTS", fn: props.scrollToProjects, id: "projects" },
        { label: "CONTACT", fn: props.scrollToContact, id: "contact" },
    ]

    return (
        <section id="header">
            <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
                <button
                    onClick={props.scrollToIntro}
                    id="icon-logo"
                    aria-label="Go to top"
                >
                    <img src="cleaned_logo.png" alt="Javad Mammadaliyev logo" />
                </button>

                {/* Desktop nav */}
                <nav className="navs" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNav(item.fn)}
                            className={`nav-button ${activeSection === item.id ? "active" : ""}`}
                            aria-current={activeSection === item.id ? "true" : undefined}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Hamburger button */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className={`ham-line ${menuOpen ? "open" : ""}`} />
                    <span className={`ham-line ${menuOpen ? "open" : ""}`} />
                    <span className={`ham-line ${menuOpen ? "open" : ""}`} />
                </button>
            </header>

            {/* Mobile dropdown */}
            <nav
                className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}
                aria-label="Mobile navigation"
            >
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleNav(item.fn)}
                        className={`mobile-nav-button ${activeSection === item.id ? "active" : ""}`}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </section>
    )
}