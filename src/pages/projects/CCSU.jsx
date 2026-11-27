import './CCSU.css'
import {
  ProjectLayout,
  Block,
  Body,
  Features,
  Feature,
  Shots,
  Shot,
} from '../../components/ProjectParts.jsx'

// Content AND layout for this project live here; styles live in AttendanceTracker.css.
export default function CCSU() {
  return (
    <ProjectLayout
      className="ccsu"
      title="CCSU Books"
      summary="A digital platform for managing and accessing CCSU books and resources."
      thumbnail="images/CCSU Books/Landing_Front.png"
      thumbnailAlt="CCSU Books preview"
      meta={[
        ['Role', 'Designer'],
        ['Timeline', 'Oct - Dec 2024'],
        ['Tools', 'Figma'],
        // ['Skills', 'Prototyping, Wireframes, Development'],
      ]}
    >
      <Block label="overview">
        <Body>
          {/* TODO: this text is cut off in the Figma file ("The company builds ...") */}
          <p>
            CCSU Cares is the counseling and wellness support unit in De La Salle University (DLSU) Laguna Campus.
            Together with the Office of Counseling and Career Services (OCCS), they provide counseling services to 
            students and faculty, as well as conduct mental health awareness campaigns and activities.
          </p>
        </Body>
      </Block>

      <Block
        label="problem"
        heading="How can we improve the ease of access to  CCSU CARES' mental wellness counseling services?"
      >
        <Body>
          <p>
            Mental health directly affects how students learn, make decisions, and build relationships, so access to counseling matters. DLSU already offers it, but students don't have a clear idea of what the services include. Information about them is scattered across word of mouth, social media, and a university website where students have to dig for the right page.
          </p>
          <p>
            This process delays the submission of attendance reports to the finance
            department and makes it difficult to address discrepancies promptly. It also
            increases the risk of inaccurate or manipulated time logs.
          </p>
        </Body>
      </Block>

      <Block label="solution" heading="A centralized attendance management platform.">
        <Body>
          <p>
            We developed a straightforward attendance tracking system that allows interns
            to easily log their working hours while giving administrators a centralized
            platform to manage and monitor attendance records.
          </p>
        </Body>
      </Block>

      <Block label="analysis">
        <Body>
          <p>
            Using the survey demographics and the interview answers, we narrowed the problem to five factors:
          </p>
          <ol>
            <li>Email buries the message. The university's centralized announcements bury messages about counseling services. As one student put it, they look at the announcements and become overwhelmed.</li>
          </ol>
        </Body>
      </Block>

      <Block label="key features">
        <Features>
          <Feature
            n={1}
            title="Log time-in and time-out with automatic timestamps."
            image="" /* export the dashboard screenshot from Figma into /public */
            alt="Intern dashboard with time-in and time-out"
          >
            Interns record daily attendance with a simple click, automatically capturing
            the start and end of their shift.
          </Feature>

          {/* TODO: placeholder copy duplicated from feature 01 in Figma */}
          <Feature n={2} title="Log time-in and time-out with automatic timestamps." image="" alt="">
            Interns record daily attendance with a simple click, automatically capturing
            the start and end of their shift.
          </Feature>
        </Features>
      </Block>

      <Block label="final design">
        <Body>
          <p>
            I collaborated with my teammates to brainstorm interface ideas and create
            prototypes in Figma, focusing on a straightforward time-in/time-out process
            and accessible attendance information.
          </p>
        </Body>
        <Shots>
          <Shot src="" alt="" />
          <Shot src="" alt="" />
        </Shots>
      </Block>

      <Block label="takeaways">
        <ul className="project-bullets">
          <li>
            <strong>My first project.</strong> This was my first time working on a project
            intended for a business’ actual needs, and using a prototyping tool (Figma), so
            it was definitely a fruitful learning experience.
          </li>
          <li>
            <strong>Design &amp; development.</strong> Taking on both design and development
            responsibilities helped me appreciate how different interface decisions can
            influence the overall development process.
          </li>
          <li>
            <strong>Manage expectations with project timeline.</strong>{' '}
            {/* TODO: text is cut off in Figma ("While this ...") */}
            Due to time constraints, we were unable to develop other features of the web
            application that were initially included in our brainstorming session. While this
          </li>
          <li>
            <strong>Redesign the interface.</strong> Admittedly, the overall design feels
            rushed since we focused more on including the key features and making the user
            flow easy. Sometime in the future, I’ll consider redesigning the interface to
            make it more modern and practice my skills.
          </li>
        </ul>
      </Block>
    </ProjectLayout>
  )
}
