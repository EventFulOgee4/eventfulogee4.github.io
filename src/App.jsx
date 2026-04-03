import Header from "./components/Header"
import Intro from "./components/Intro"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import React from "react"
import ParticlesComponent from "./components/particles"

export default function App() {
  const introSection      = React.useRef(null)
  const aboutSection      = React.useRef(null)
  const skillsSection     = React.useRef(null)
  const experienceSection = React.useRef(null)
  const educationSection  = React.useRef(null)
  const projectsSection   = React.useRef(null)
  const contactSection    = React.useRef(null)

  // Single reusable scroll helper — replaces 7 state variables + 7 useEffects
  function scrollTo(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <ParticlesComponent id="particles" />
      <Header
        scrollToIntro={      () => scrollTo(introSection)}
        scrollToAbout={      () => scrollTo(aboutSection)}
        scrollToSkills={     () => scrollTo(skillsSection)}
        scrollToExperience={ () => scrollTo(experienceSection)}
        scrollToEducation={  () => scrollTo(educationSection)}
        scrollToProjects={   () => scrollTo(projectsSection)}
        scrollToContact={    () => scrollTo(contactSection)}
        // Pass refs so Header can track the active section on scroll
        aboutSection={aboutSection}
        skillsSection={skillsSection}
        experienceSection={experienceSection}
        educationSection={educationSection}
        projectsSection={projectsSection}
        contactSection={contactSection}
      />
      <Intro      introSection={introSection}           scrollToAbout={() => scrollTo(aboutSection)} />
      <About      aboutSection={aboutSection} />
      <Skills     skillsSection={skillsSection} />
      <Experience experienceSection={experienceSection} />
      <Education  educationSection={educationSection} />
      <Projects   projectsSection={projectsSection} />
      <Contact    contactSection={contactSection} />
      <Footer />
    </>
  )
}