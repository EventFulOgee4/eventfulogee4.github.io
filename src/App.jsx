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

export default function App () {

  const introSection = React.useRef(null)
  const aboutSection = React.useRef(null)
  const skillsSection = React.useRef(null)
  const experienceSection = React.useRef(null)
  const educationSection = React.useRef(null)
  const projectsSection = React.useRef(null)
  const contactSection = React.useRef(null)

  const [isPressedIntro, setIsPressedIntro] = React.useState(false)
  const [isPressedAbout, setIsPresseAbout] = React.useState(false)
  const [isPressedSkills, setIsPressedSkills] = React.useState(false)
  const [isPressedExperience, setIsPressedExperience] = React.useState(false)
  const [isPressedEducation, setIsPressedEducation] = React.useState(false)
  const [isPressedProjects, setIsPressedProjects] = React.useState(false)
  const [isPressedContact, setIsPressedContact] = React.useState(false)

  function scrollToIntro(){
    setIsPressedIntro(prevIsPressedIntro => !prevIsPressedIntro)
  }

  function scrollToAbout(){
    setIsPresseAbout(prevIsPressedAbout => !prevIsPressedAbout)
  }

  function scrollToSkills(){
    setIsPressedSkills(prevIsPressedSkills => !prevIsPressedSkills)
  }

  function scrollToExperience(){
    setIsPressedExperience(prevIsPressedExperience => !prevIsPressedExperience)
  }

  function scrollToEducation(){
    setIsPressedEducation(prevIsPressedEducation => !prevIsPressedEducation)
  }

  function scrollToProjects(){
    setIsPressedProjects(prevIsPressedProjects => !prevIsPressedProjects)
  }

  function scrollToContact(){
    setIsPressedContact(prevIsPressedContact => !prevIsPressedContact)
  }

    React.useEffect(() => {
        isPressedIntro && introSection.current.scrollIntoView({behavior: "smooth"})
    }, [isPressedIntro])

    React.useEffect(() => {
        isPressedAbout && aboutSection.current.scrollIntoView({behavior: "smooth"})
    }, [isPressedAbout])

    React.useEffect(() => {
        isPressedSkills && skillsSection.current.scrollIntoView({behavior: "smooth"})
    }, [isPressedSkills])

    React.useEffect(() => {
        isPressedExperience && experienceSection.current.scrollIntoView({behavior: "smooth"})
    }, [isPressedExperience])

    React.useEffect(() => {
        isPressedEducation && educationSection.current.scrollIntoView({behavior: "smooth"})
    }, [isPressedEducation])

    React.useEffect(() => {
        isPressedProjects && projectsSection.current.scrollIntoView({behavior: "smooth"})
    }, [isPressedProjects])

    React.useEffect(() => {
        isPressedContact && contactSection.current.scrollIntoView({behavior: "smooth"})
    }, [isPressedContact])

  return (
    <>
      <Header 
      scrollToIntro={scrollToIntro}
      scrollToAbout={scrollToAbout}
      scrollToSkills={scrollToSkills}
      scrollToExperience={scrollToExperience}
      scrollToEducation={scrollToEducation}
      scrollToProjects={scrollToProjects}
      scrollToContact={scrollToContact}
      />
      <Intro introSection={introSection}/>
      <About aboutSection={aboutSection} />
      <Skills skillsSection={skillsSection} />
      <Experience experienceSection={experienceSection} />
      <Education educationSection={educationSection} />
      <Projects projectsSection={projectsSection} />
      <Contact contactSection={contactSection} />
      <Footer/>
    </>
  )
}