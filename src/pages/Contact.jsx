import Section from '../components/Section.jsx'

const contacts = [
  {
    title: 'Email',
    text: 'yeu.alvrz@gmail.com',
    href: 'mailto:yeu.alvrz@gmail.com',
    note: 'Best for opportunities and collaborations.',
  },
  {
    title: 'LinkedIn',
    text: 'Ysabela Erika Alvarez',
    href: 'https://www.linkedin.com/in/ysabela-erika-alvarez-9aa0633a6/',
    note: 'Let’s connect professionally.',
  },
  {
    title: 'GitHub',
    text: 'thisisredtoo',
    href: 'https://github.com/thisisredtoo',
    note: 'See my code and projects.',
  },
]

export default function Contact() {
  return (
    <main className="content">
      <Section id="contact" title="Contact">
        <p className="page-intro">
          Have a project, opportunity, or question? Reach out through any of these.
        </p>

        <div className="projects" style={{ marginTop: '1.5rem' }}>
          {contacts.map((c) => (
            <div className="card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.note}</p>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {c.text}
              </a>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
