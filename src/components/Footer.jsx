import { FiMail } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'

const LAST_UPDATED = 'nov. 7, 2026' // update this when you publish changes

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-text">
          <p className="footer-connect">Let’s connect!ヾ(•ω•`)o</p>
          <p className="footer-updated">last updated: {LAST_UPDATED}</p>
        </div>

        <ul className="footer-icons">
          <li>
            <a href="mailto:yeu.alvrz@gmail.com" aria-label="Email Erika">
              <FiMail size={30} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ysabela-erika-alvarez-9aa0633a6/"
              target="_blank"
              rel="noreferrer"
              aria-label="Erika on LinkedIn"
            >
              <BsLinkedin size={20} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}