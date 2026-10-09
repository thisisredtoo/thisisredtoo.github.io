import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'
import Line from 'react';
// import { scrollToSection } from '../components/Navbar.jsx'
import { experience } from '../data/experience.js'
import { projects } from '../data/projects.js'
import { skills } from '../data/skills.js'

import'../index.css';

export default function Home() {
  const { state } = useLocation()

  // Arrived from another page via the navbar (e.g. Play -> Contact)
  useEffect(() => {
    if (state?.scrollTo) {
      const t = setTimeout(() => scrollToSection(state.scrollTo), 50)
      return () => clearTimeout(t)
    }
  }, [state])

  return (
    <main className="content">
      <Hero />
      <About />

      <hr/>

      <Section id="projects" title="Projects">
        <div className="projects">
          {projects.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <hr/>

      <Section id="experience" title="Experience">
        <div className="projects">
          {experience.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      {/* <Section id="skills" title="Skills & Interests">
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Section> */}

      <hr/>
      
      <Contact />
    </main>
  )
}
