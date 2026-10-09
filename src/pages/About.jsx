import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'
import { experience } from '../data/experience.js'
import { skills } from '../data/skills.js'

export default function About() {
  return (
    <main className="content">
      <Section id="about" title="About Me">
        <p className="page-intro">
          I'm a <strong>detail-oriented</strong> and <strong>resourceful</strong> individual who
          enjoys building practical, <strong>people-focused solutions</strong> through creativity,
          technology, and compassion. I value <strong>clear communication</strong>, thrive in
          collaborative environments, and I'm always willing to <strong>learn</strong> and{' '}
          <strong>take on new challenges</strong>.
        </p>
      </Section>

      <Section id="experience" title="Experience">
        <div className="projects">
          {experience.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills & Interests">
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Section>
    </main>
  )
}
