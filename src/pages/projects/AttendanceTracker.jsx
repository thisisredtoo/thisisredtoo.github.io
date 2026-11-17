import './AttendanceTracker.css'
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
export default function AttendanceTracker() {
  return (
    <ProjectLayout
      className="attendance-tracker"
      title="Attendance Tracking Web App"
      summary="Streamlines intern timekeeping and helps administrators efficiently manage and monitor attendance records."
      banner=""
      bannerAlt="Attendance Tracking Web App banner"
      meta={[
        ['Role', 'Designer & Developer'],
        ['Timeline', '2024 (3 months)'],
        ['Tools', 'Figma, ReactJS'],
        ['Skills', 'Prototyping, Wireframes, Development'],
      ]}
    >
      <Block label="overview">
        <Body>
          {/* TODO: this text is cut off in the Figma file ("The company builds ...") */}
          <p>
            Gallium31 is an IT and digital innovation company specializing in digital
            transformation and custom application development. The company builds
          </p>
        </Body>
      </Block>

      <Block
        label="problem"
        heading="Attendance tracking relied on manual and fragmented processes."
      >
        <Body>
          <p>
            Gallium31 followed a hybrid work setup and tracked intern attendance through
            physical logbooks or Messenger, with administrators manually consolidating
            records into spreadsheets for payroll.
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
          <p>
            The system simplifies daily timekeeping, reduces manual record keeping, and
            makes attendance management more organized and efficient.
          </p>
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
